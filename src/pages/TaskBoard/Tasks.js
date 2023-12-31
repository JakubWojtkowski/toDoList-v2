import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Task from "./Task";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase.config";

function Tasks({ category, showAddTaskForm, boardStatus }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTasks() {
      const q = query(
        collection(db, `categories/${category.id}/tasks`),
        where("status", "==", boardStatus)
      );

      onSnapshot(q, (snapshot) => {
        let tempTasks = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setTasks(tempTasks);
      });
    }

    getTasks();
  }, [category.id, boardStatus]);

  return (
    <Container>
      <Heading>
        {category.name}
        <Quantity>{tasks.length}</Quantity>
        {boardStatus === "current" && (
          <AddNew onClick={() => showAddTaskForm(category.id)}>+</AddNew>
        )}
      </Heading>
      {tasks?.map((task, index) => {
        return <Task key={index} task={task} categoryId={category.id} />;
      })}
    </Container>
  );
}

export default Tasks;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap: 18px;
`;

const Heading = styled.h3`
  font-size: 1.25rem;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: capitalize;
`;

const Quantity = styled.div`
  background: #c3acd0;
  color: #7743db;
  padding: 3px 8px;
  border-radius: 0px 32px 32px 32px;
`;

const AddNew = styled(Quantity)`
  background: transparent;
  border: 1px dashed #7743db;
  cursor: pointer;
  margin: 0 0 0 auto;
`;
