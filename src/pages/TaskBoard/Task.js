import { Close, Done, Event } from "@mui/icons-material";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { db } from "../../firebase.config";

function Task({ task, categoryId }) {
  const [isClicked, setIsClicked] = useState(false);

  const convertDate = () => {
    const currentDate = new window.Date();
    const date = new window.Date(task.date);
    const days = Math.floor((date - currentDate) / (1000 * 60 * 60 * 24)) + 1;

    if (days < 0) {
      task.status = "delayed";
      return date.toDateString().slice(4, 10);
    }

    return days > 0 ? date.toDateString().slice(4, 10) : "Today";
  };

  const removeTask = async (taskId) => {
    await deleteDoc(doc(db, "categories", categoryId, "tasks", taskId));
  };

  const checkTask = async (taskId) => {
    const docRef = doc(db, "categories", categoryId, "tasks", taskId);

    updateDoc(docRef, {
      status: "done",
    }).then(() => {
      console.log("Updating document...");
    });
  };

  const handleClick = (id) => {
    setIsClicked(true);
    setTimeout(() => {
      removeTask(id);
      setIsClicked(false);
    }, 500);
  };

  return (
    <Container animate={isClicked} status={task.status}>
      <Title>{task.title}</Title>
      <Description>{task.description.slice(0, 50).concat("...")}</Description>
      <Priority task={task.priority}>{task.priority}</Priority>
      <Date>
        <Event /> {convertDate()}
      </Date>
      <Actions>
        <Check
          onClick={() => {
            checkTask(task.id);
          }}
        >
          <Done />
        </Check>
        <Remove
          onClick={() => {
            handleClick(task.id);
          }}
        >
          <Close />
        </Remove>
      </Actions>
    </Container>
  );
}

export default Task;

const flash = keyframes`
  from {
      opacity: 1;
      }

      to {
      opacity: 0;
      }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: #f9f9f9;
  width: 240px;
  padding: 18px;
  border-radius: 24px;
  position: relative;
  border: ${(props) =>
    props.status === "delayed"
      ? "2px solid #ff758fcf"
      : "2px solid transparent"};

  animation: ${(props) =>
    props.animate &&
    css`
      ${flash} 600ms linear;
    `};
`;

const Title = styled.h4`
  width: 75%;
  overflow: hidden;
`;

const Description = styled.p`
  line-height: 1.5;
  opacity: 0.6;
  margin-right: 18px;
  overflow: hidden;
`;

const Priority = styled.p`
  border-radius: 6px;
  color: ${(props) => {
    if (props.task === "High") {
      return "#ef233c";
    } else if (props.task === "Medium") {
      return "#f8961e";
    } else {
      return "#80b918";
    }
  }};
  max-width: 100px;
  background: ${(props) => {
    if (props.task === "High") {
      return "rgba(255, 117, 143, 0.4)";
    } else if (props.task === "Medium") {
      return "rgba(255, 186, 8, 0.4)";
    } else {
      return "rgba(193, 242, 176, 0.4)";
    }
  }};
  font-size: 85%;
  padding: 4px;
  font-weight: bold;
  text-align: center;
`;

const Date = styled.div`
  margin-top: 18px;
  opacity: 0.45;
  display: flex;
  gap: 8px;
  align-items: center;

  .MuiSvgIcon-root {
    position: relative;
  }
`;

const Actions = styled.div``;

const Remove = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  opacity: 0.45;
  transition: all 250ms ease-in-out;

  &:hover {
    opacity: 1;
    transform: rotate(90deg);
  }
`;

const Check = styled(Remove)`
  top: 12px;
  right: 36px;

  &:hover {
    opacity: 1;
    transform: rotate(0deg);
  }
`;
