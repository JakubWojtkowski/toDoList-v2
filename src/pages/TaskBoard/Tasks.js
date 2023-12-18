import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Task from "./Task";
import { useSelector } from "react-redux";
import { selectTasks } from "../../features/task/taskSlice";

function Tasks(category) {
  const tasks = useSelector(selectTasks);

  return (
    <Container>
      {tasks?.map((task, index) => {
        return <Task key={index} task={task} />;
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
