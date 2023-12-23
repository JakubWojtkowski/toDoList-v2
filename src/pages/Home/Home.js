import React from "react";
import styled from "styled-components";
import Hero from "./Hero";

function Home() {
  return (
    <Container>
      <Hero />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  margin-top: 82px;
  min-height: calc(100vh - 82px);
  display: flex;
`;
