import React from "react";
import styled from "styled-components";
import Tasks from "./Tasks";
import { useSelector } from "react-redux";
import { selectTasks } from "../../features/task/taskSlice";

function Board() {
  const tasks = useSelector(selectTasks);

  const createTask = () => {
    console.log("ok");
  };

  return (
    <Container>
      {tasks &&
        tasks.map((task, index) => {
          return (
            <Category>
              <Heading>
                {task.taskCategory}
                <Quantity>3</Quantity> <AddNew onClick={createTask}>+</AddNew>
              </Heading>
              <Tasks category={task.taskCategory} />
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
  padding: 6px;
  border-radius: 0px 32px 32px 32px;
`;

const AddNew = styled(Quantity)`
  background: transparent;
  border: 1px dashed #7743db;
  cursor: pointer;
  margin: 0 0 0 auto;
`;
