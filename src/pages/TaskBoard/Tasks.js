import React from "react";
import styled from "styled-components";
import Task from "./Task";

function Tasks() {
  return (
    <Container>
      <Task />
      <Task />
    </Container>
  );
}

export default Tasks;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap: 18px;
`;
