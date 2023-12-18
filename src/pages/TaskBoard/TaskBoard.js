import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUser, selectUserPhoto } from "../../features/user/userSlice";
import { Email, KeyboardArrowDown, Notifications } from "@mui/icons-material";
import Board from "./Board";

function TaskBoard() {
  const user = useSelector(selectUser);
  const userPhoto = useSelector(selectUserPhoto);

  return (
    <Container>
      <Wrapper>
        <Header>
          <Heading>Tasks Board</Heading>
          <HeaderMenu>
            <Icon>
              <Email />
            </Icon>
            <Icon>
              <Notifications />
            </Icon>
            <AvatarContainer>
              <Image src={userPhoto} alt="user photo" />
            </AvatarContainer>
            <Name>
              {user.name} <KeyboardArrowDown />
            </Name>
          </HeaderMenu>
        </Header>
        <Board />
      </Wrapper>
    </Container>
  );
}

export default TaskBoard;

const Container = styled.div`
  min-height: calc(100vh - 82px);
  display: flex;
  padding: 24px 0;
`;

const Wrapper = styled.div`
  flex: 1;
  background: rgba(192, 192, 192, 0.25);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(6.9px);
  -webkit-backdrop-filter: blur(6.9px);
  border: 1px solid rgba(255, 255, 255, 0.09);
  padding: 48px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Heading = styled.h2`
  letter-spacing: -0.5px;
  font-size: 1.75rem;
`;

const HeaderMenu = styled.div`
  display: flex;
  gap: 18px;
`;

const Icon = styled.div`
  width: 48px;
  height: 48px;
  background: #f9f9f9;
  border-radius: 50%;
  display: grid;
  place-items: center;
  opacity: 0.5;
  transition: all 250ms ease-in-out;
  cursor: pointer;

  .MuiSvgIcon-root {
    color: #313131;
  }

  &:hover {
    opacity: 1;
    transform: rotate(-15deg);
  }
`;

const AvatarContainer = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid #7743db;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  padding: 2px;
  border-radius: 50%;
`;

const Name = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  .MuiSvgIcon-root {
    color: #313131;
    opacity: 0.5;
    transition: all 250ms ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`;
