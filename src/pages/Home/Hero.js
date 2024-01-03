import { Code, TaskOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/images/arrow.svg";
import arrowLine from "../../assets/images/arrow-line.svg";

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
        <TextBottom>
          <Button>Discover</Button>
          <Numbers>
            <Number>+2500</Number>
            <Title>New Users Weekly</Title>
          </Numbers>
          <Numbers>
            <Number>100%</Number>
            <Title>Better Overall Productivity</Title>
          </Numbers>
        </TextBottom>
      </TextHero>

      <Cards>
        <img src={arrowLine} alt="" />
        <TaskCard>
          <CircleIcon tasks="tasks">
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
            <Code />
          </CircleIcon>
          <CardHeading>Manage your Projects</CardHeading>
          <CardSubHeading>
            Help your team streamline your work and boost productivity: Powerful
            Project Management Made Simple
          </CardSubHeading>
        </ProjectsCard>
        <Arrow />
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
  min-height: calc(100vh - 82px);
  padding: 18px 0;
  grid-gap: 36px;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-gap: 72px;
  }
`;

const TextHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Heading = styled.h1`
  font-size: clamp(4rem, 7.5vw, 5.5rem);
  letter-spacing: -1px;
`;

const SubHeading = styled.p`
  font-size: 1.35rem;
  line-height: 1.75;
  width: 80%;
  opacity: 0.75;
  margin-bottom: 36px;
`;

const TextBottom = styled.div`
  display: flex;
  gap: 36px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  border: 1px solid #c3acd0;
  border: none;
  background: #7743db;
  color: #fffbf5;
  font-size: 1.25rem;
  letter-spacing: -0.5px;
  box-shadow: rgba(119, 67, 219, 0.5) 0px 7px 29px 0px;

  &:hover {
    border-radius: 24px;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  place-items: end;

  img {
    transform: rotate(-120deg);
    width: 100%;
    height: 100%;
    filter: brightness(0) saturate(100%) invert(31%) sepia(51%) saturate(6297%)
      hue-rotate(250deg) brightness(91%) contrast(88%);
  }

  svg {
    grid-column: 3;
  }

  @media only screen and (max-width: 768px) {
    img,
    svg {
      display: none;
    }

    .MuiSvgIcon-root {
      display: block;
    }

    grid-template-columns: 1fr;
  }
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
  border: 4px solid #674188;
  border-radius: 12px;
  grid-row: 2;
  padding: 10px;
  background: #c3acd0;

  @media only screen and (max-width: 768px) {
    width: 250px;
    height: 180px;
    grid-row: 2;
  }
`;

const ProjectsCard = styled(TaskCard)`
  width: 260px;
  height: 260px;
  border-color: #c3acd0;
  grid-row: 1;
  grid-column: 3;
  box-shadow: -12px 12px #313131;
  background: #f7efe5;

  @media only screen and (max-width: 768px) {
    width: 220px;
    height: 260px;
    grid-column: 1;
  }
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
  background: ${(props) => (props.tasks === "tasks" ? "#674188" : "#c3acd0")};
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  top: -36px;

  .MuiSvgIcon-root {
    color: #f9f9f9 !important;
    font-size: 30px !important;
    position: absolute;
  }
`;

const Numbers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

const Number = styled.h2`
  font-weight: 900;
  font-family: "Rubik";
`;

const Title = styled.span`
  opacity: 0.65;
  text-align: center;
`;
