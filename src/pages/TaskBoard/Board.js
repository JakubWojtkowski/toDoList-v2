import React from "react";
import styled from "styled-components";
import Tasks from "./Tasks";

function Board() {
  const createTask = () => {
    console.log("ok");
  };

  return (
    <Container>
      <Category>
        <Heading>
          Research <Quantity>3</Quantity>{" "}
          <AddNew onClick={createTask}>+</AddNew>
        </Heading>
        <Tasks />
      </Category>

      <Category>
        <Heading>
          Design <Quantity>2</Quantity>
          <AddNew onClick={createTask}>+</AddNew>
        </Heading>
        <Tasks />
      </Category>

      <Category>
        <Heading>
          Development <Quantity>4</Quantity>
          <AddNew onClick={createTask}>+</AddNew>
        </Heading>
        <Tasks />
      </Category>

      <Category>
        <Heading>
          Code <Quantity>2</Quantity>
          <AddNew onClick={createTask}>+</AddNew>
        </Heading>
        <Tasks />
      </Category>
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
