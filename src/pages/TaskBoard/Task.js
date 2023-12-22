import { Close, Event } from "@mui/icons-material";
import { deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { db } from "../../firebase.config";

function Task({ task, categoryId, boardStatus }) {
  const [isDelete, setIsDelete] = useState(false);

  const convertDate = () => {
    const currentDate = new window.Date();
    const date = new window.Date(task.date);
    const days = Math.floor((date - currentDate) / (1000 * 60 * 60 * 24));

    return days > 0 ? date.toDateString().slice(4, 10) : "Today";
  };

  const removeTask = async (taskId) => {
    await deleteDoc(doc(db, "categories", categoryId, "tasks", taskId));
  };

  const handleClick = (id) => {
    setIsDelete(true);
    setTimeout(() => {
      removeTask(id);
      setIsDelete(false);
    }, 500);
  };

  return (
    <Container animate={isDelete} status={task.status}>
      <Title>{task.title}</Title>
      <Description>{task.description.slice(0, 50).concat("...")}</Description>
      <Priority task={task.priority}>{task.priority}</Priority>
      <Date>
        <Event /> {convertDate()}
      </Date>
      <Remove
        onClick={() => {
          handleClick(task.id);
        }}
      >
        <Close />
      </Remove>
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

  animation: ${(props) =>
    props.animate &&
    css`
      ${flash} 600ms linear;
    `};
`;

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

const Title = styled.h4``;

const Description = styled.p`
  line-height: 1.5;
  opacity: 0.6;
  margin-right: 18px;
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
