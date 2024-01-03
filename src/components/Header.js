import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  selectUser,
  setUserSignIn,
  setUserSignOut,
} from "../features/user/userSlice";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { auth } from "../firebase.config";
import { DragHandle, Menu } from "@mui/icons-material";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const signOut = async () => {
    try {
      await auth.signOut().then((result) => {
        dispatch(setUserSignOut());
        history.push("/");
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserSignIn({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      }
    });
  }, [user, dispatch]);

  return (
    <Container>
      <Navbar>
        <LeftNav>
          <Logo>TodoList</Logo>
          <Item>Features</Item>
          <Item>Pricing</Item>
          <Item>Resources</Item>

          {user.name && (
            <Link to={"/board"}>
              <Item>Board</Item>
            </Link>
          )}
        </LeftNav>
        <RightNav>
          <ItemDropDown>
            <Menu />
          </ItemDropDown>
          {user.name !== null ? (
            <Button login onClick={signOut}>
              Sign Out
            </Button>
          ) : (
            <Link to={"/login"}>
              <Button login>Sign In</Button>
            </Link>
          )}

          <Button>Get started</Button>
        </RightNav>
      </Navbar>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  position: fixed;
  margin: auto auto;
  max-width: 1200px;
  margin: 0 auto;
  width: 90vw;
  z-index: 1;
  height: 82px;
`;

const Navbar = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  font-size: clamp(1rem, 1.5vw, 1.1rem);

  a {
    text-decoration: none;
    color: inherit;
    transition: all 250ms ease-in-out;

    &:hover {
      color: #c3acd0;
    }
  }
`;

const Logo = styled.h1`
  font-weight: 900;
  font-size: clamp(1.5rem, 5vw, 2.25rem);
  margin-right: 36px;
  color: #7743db;
  cursor: pointer;
`;

const Item = styled.div`
  cursor: pointer;
  transition: all 250ms ease-in-out;
  letter-spacing: -0.25px;

  &:hover {
    color: #c3acd0;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const ItemDropDown = styled.div``;

const RightNav = styled(LeftNav)`
  .MuiSvgIcon-root {
    color: #7743db;
    font-size: 28px;
    cursor: pointer;
    display: none;

    @media only screen and (max-width: 1024px) {
      display: block;
    }
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 12px;
  cursor: pointer;
  background: ${(props) => (props.login ? "#F7EFE5" : "#7743db;")};
  color: ${(props) => (props.login ? "#7743db" : "#f9f9f9;")};
  border: ${(props) =>
    props.login ? "1px solid transparent" : "1px solid #c3acd0;"};
  font-weight: bold;
  font-size: clamp(0.85rem, 1.5vw, 1rem);
  transition: all 250ms ease-in-out;
  letter-spacing: -0.5px;

  &:hover {
    border-radius: 24px;
    background: ${(props) => (props.login ? "" : "#7743db;")};
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
