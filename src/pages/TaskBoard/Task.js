import { Close, Event } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

function Task() {
  return (
    <Container>
      <Title>Redesign Token Market</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam
        kus afhgwalpxk tkwopwa
      </Description>
      <Priority>Low</Priority>
      <Date>
        <Event /> Today
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
  color: #65b741;
  max-width: 100px;
  background: #c1f2b0;
  font-size: 85%;
  padding: 4px;
  font-weight: bold;
  text-align: center;
`;

const Date = styled.div`
  margin-top: 18px;
  opacity: 0.6;
  display: flex;
  gap: 8px;
  align-items: center;

  .MuiSvgIcon-root {
    position: relative;
  }
`;
