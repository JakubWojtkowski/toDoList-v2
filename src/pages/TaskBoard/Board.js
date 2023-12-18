import React from "react";
import styled from "styled-components";
import Tasks from "./Tasks";
import { useSelector } from "react-redux";
import { selectTasks } from "../../features/task/taskSlice";

function Board() {
  const categories = useSelector(selectTasks);

  return (
    <Container>
      {categories &&
        categories.map((category, index) => {
          return (
            <Category key={index}>
              <Tasks category={category} />
            </Category>
          );
        })}
    </Container>
  );
}

export default Board;

const Container = styled.div`
  display: flex;
  gap: 36px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
