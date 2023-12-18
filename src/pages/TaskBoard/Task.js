import { Close, Event } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";

function Task({ task }) {
  const convertDate = () => {
    const currentDate = new window.Date();
    const date = new window.Date(task.date);
    const days = Math.floor((date - currentDate) / (1000 * 60 * 60 * 24));

    return days > 0 ? date.toDateString().slice(4, 10) : "Today";
  };

  return (
    <Container>
      <Title>{task.title}</Title>
      <Description>{task.description}</Description>
      <Priority task={task.priority}>{task.priority}</Priority>
      <Date>
        <Event /> {convertDate()}
      </Date>
      <Remove>
        <Close className="close" />
      </Remove>
    </Container>
  );
}

export default Task;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: #f9f9f9;
  padding: 18px;
  border-radius: 24px;
  position: relative;
`;

const Remove = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  opacity: 0.6;
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
