import React from "react";
import styled from "styled-components";

function Hero() {
  return (
    <Container>
      <TextHero>
        <Heading>
          Easily<br></br> organize <br></br>your work.
        </Heading>
        <SubHeading>
          Simplify your life with our sleek todo list website for effortless
          task organization
        </SubHeading>
        <Button>Discover</Button>
      </TextHero>
      <Aside></Aside>
    </Container>
  );
}

export default Hero;

const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 64px 0;
`;

const TextHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Heading = styled.h1`
  font-size: clamp(3rem, 7.5vw, 5rem);
`;

const SubHeading = styled.p`
  font-size: 24px;
  line-height: 1.5;
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

const Aside = styled.div``;
