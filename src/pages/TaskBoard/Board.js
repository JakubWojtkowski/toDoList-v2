import React, { useState } from "react";
import styled from "styled-components";
import Tasks from "./Tasks";
import { useSelector } from "react-redux";
import { selectTasks } from "../../features/task/taskSlice";
import {
  Assignment,
  CalendarMonth,
  Dashboard,
  EventBusy,
  LibraryAddCheck,
} from "@mui/icons-material";
import NewTaskForm from "./NewTaskForm";

function Board() {
  const categories = useSelector(selectTasks);
  const [categoryId, setCategoryId] = useState("");
  const [display, setDisplay] = useState(true);
  const [boardStatus, setBoardStatus] = useState("current");

  const changeBoard = (board) => {
    setBoardStatus(board);
  };

  const showAddTaskForm = (id) => {
    setDisplay((curr) => !curr);
    setCategoryId(id);
  };

  return (
    <Container>
      <SideBar>
        <Select onClick={() => changeBoard("current")}>
          <Dashboard />
          Board
        </Select>

        <Select name="calendar">
          <CalendarMonth />
          Calendar
        </Select>

        <Select onClick={() => changeBoard("done")}>
          <LibraryAddCheck />
          Done
        </Select>

        <Select name="current" onClick={() => changeBoard("current")}>
          <Assignment />
          Current
        </Select>

        <Select name="delayed" onClick={() => changeBoard("delayed")}>
          <EventBusy />
          Delayed
        </Select>
      </SideBar>

      {display === true &&
        categories?.map((category, index) => {
          return (
            <Category key={index}>
              <Tasks
                category={category}
                boardStatus={boardStatus}
                showAddTaskForm={showAddTaskForm}
              />
            </Category>
          );
        })}

      {!display && (
        <NewTaskForm
          categoryId={categoryId}
          showAddTaskForm={showAddTaskForm}
        />
      )}
    </Container>
  );
}

export default Board;

const Container = styled.div`
  display: flex;
  gap: 36px;
  position: relative;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const SideBar = styled.div`
  width: 64px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  position: sticky;
`;

const Select = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: -0.5px;
  align-items: center;
  opacity: 0.65;
  gap: 8px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  z-index: 1;

  .MuiSvgIcon-root {
    color: #313131;
    z-index: 0;
  }

  &:hover {
    opacity: 1;
  }
`;
