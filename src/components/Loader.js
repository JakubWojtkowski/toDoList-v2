import React from "react";
import styled from "styled-components";
import { HashLoader } from "react-spinners";

function Loader() {
  return (
    <Container>
      <HashLoader size={65} color="#7743DB" />
    </Container>
  );
}

export default Loader;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
