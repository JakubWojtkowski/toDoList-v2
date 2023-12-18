import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Home from "./pages/Home/Home.js";
import Loader from "./components/Loader.js";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TaskBoard from "./pages/TaskBoard/TaskBoard.js";
import Login from "./pages/Login/Login";
import { db } from "./firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice.js";
import { collection, onSnapshot } from "firebase/firestore";

function App() {
  const user = useSelector(selectUser);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const getTasks = async () => {
      onSnapshot(collection(db, "tasks"), (snapshot) => {
        let tempTasks = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        // dispatch();
      });
    };

    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <Router>
            <Header />

            <Switch>
              <Route path="/board">
                {user.name !== null ? <TaskBoard /> : <Login />}
              </Route>

              <Route path="/login">
                <Login />
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </Container>
      )}
    </>
  );
}

export default App;

const Container = styled.div`
  max-width: 1200px;
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
