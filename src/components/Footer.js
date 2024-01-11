import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background: #14213d;
  margin-top: 96px;
  border-radius: 64px 64px 0 0;
  color: #eeeeee;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 90vw;
  padding: 48px 0;
`;
