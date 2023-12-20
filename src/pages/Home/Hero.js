import { TaskOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

function Hero() {
  return (
    <Container>
      <TextHero>
        <Heading>
          Easily<br></br> organize <br></br>your work
        </Heading>
        <SubHeading>
          Simplify your life with our sleek todo list website for effortless
          task organization
        </SubHeading>
        <Button>Discover</Button>
      </TextHero>

      <Cards>
        <TaskCard>
          <CircleIcon>
            <TaskOutlined />
          </CircleIcon>
          <CardHeading>Manage your Task</CardHeading>
          <CardSubHeading>
            Stay organized and on top of Your Tasks: The ultimmate Task
            Management Solution
          </CardSubHeading>
        </TaskCard>
        <ProjectsCard>
          <CircleIcon>
            <TaskOutlined />
          </CircleIcon>
          <CardHeading>Manage your Projects</CardHeading>
          <CardSubHeading>
            Help your team streamline your work and boost productivity: Powerful
            Project Management Made Simple
          </CardSubHeading>
        </ProjectsCard>
      </Cards>
    </Container>
  );
}

export default Hero;

const Container = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  padding: 64px 0;
  min-height: calc(100vh - 82px);
`;

const TextHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Heading = styled.h1`
  font-size: clamp(3rem, 7.5vw, 5rem);
  letter-spacing: -0.5px;
`;

const SubHeading = styled.p`
  font-size: 24px;
  line-height: 1.5;
  width: 75%;
  margin-bottom: 36px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 12px;
  margin: 0 auto 0 0;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  border: 1px solid #c3acd0;
  background: #7743db;
  color: #fffbf5;
  font-size: 1.25rem;
  letter-spacing: -0.5px;

  &:hover {
    border-radius: 24px;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  place-items: end;
`;

const TaskCard = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: 3px solid #313131;
  border-radius: 12px;
  grid-row: 2;
  padding: 10px;
`;

const ProjectsCard = styled(TaskCard)`
  width: 260px;
  height: 260px;
  border-color: #7743db;
  grid-row: 1;
  grid-column: 3;
`;

const CardHeading = styled.h2`
  text-align: center;
  letter-spacing: -0.5px;
`;

const CardSubHeading = styled.p`
  text-align: center;
  line-height: 1.5;
  opacity: 0.75;
`;

const CircleIcon = styled.div`
  position: absolute;
  background: #c3acd0;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  top: -36px;

  .MuiSvgIcon-root {
    color: #f9f9f9 !important;
  }
`;
