import React from "react";
import styled from "styled-components";
import {
  FacebookSharp,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Main>
          <MainTop>
            <Heading>
              What are you <br></br> waiting for?
            </Heading>
            <Buttons>
              <Button>Book now</Button>
              <Button learn>Learn more</Button>
            </Buttons>
          </MainTop>

          <MainBottom>
            <Item>
              <img src="../images/logo.png" alt="logo-footer" />
            </Item>
            <Item>
              <ItemHeading>Explore</ItemHeading>
              <ItemContent>Why Us?</ItemContent>
            </Item>
            <Item>
              <ItemHeading>Resources</ItemHeading>
              <ItemContent>Help center</ItemContent>
              <ItemContent>Pricing</ItemContent>
              <ItemContent>Contact</ItemContent>
              <ItemContent>Community</ItemContent>
            </Item>
            <Item>
              <ItemHeading>Company</ItemHeading>
              <ItemContent>Terms & Conditions</ItemContent>
              <ItemContent>Privacy</ItemContent>
            </Item>
          </MainBottom>
        </Main>

        <Bottom>
          <Copyright>
            Todolist &copy; 2023.
            <br />
            All Rights Resserved
          </Copyright>
          <Socials>
            <FacebookSharp />
            <Instagram />
            <Twitter />
            <YouTube />
          </Socials>
        </Bottom>
      </Wrapper>
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
  margin: 0 auto;
  padding: 48px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 96px;
  gap: 64px;
  flex-wrap: wrap;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  img {
    width: 128px;
    height: 128px;
  }
`;

const ItemHeading = styled.h3``;

const ItemContent = styled.a`
  opacity: 0.5;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Copyright = styled.span`
  opacity: 0.5;
`;

const Socials = styled.div`
  display: flex;
  gap: 12px;

  .MuiSvgIcon-root {
    cursor: pointer;
  }
`;

const MainTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const MainBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  gap: 24px;
  flex-wrap: wrap;

  @media only screen and (max-width: 600px) {
    padding: 24px;
  }
`;

const Heading = styled.h2`
  font-size: clamp(3rem, 5vw, 5rem);
  letter-spacing: -1px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Button = styled.button`
  background: ${(props) => (props.learn ? "#14213d" : "#fca311")};
  color: ${(props) => (props.learn ? "#fff" : "#14213d")};
  padding: 16px 32px;
  border: 1px solid transparent;
  border-color: ${(props) => (props.learn ? "#fff" : "transparent")};
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  font-weight: bold;
  letter-spacing: 0.25px;
  width: 180px;
  font-size: 1rem;
`;
