import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import styled from "styled-components";
import { auth, googleProvider } from "../../firebase.config";
import { setUserSignIn } from "../../features/user/userSlice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signInWithPopup(auth, googleProvider).then((result) => {
        let user = result.user;
        dispatch(
          setUserSignIn({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );

        setTimeout(() => {
          setIsLoading(false);
          history.goBack();
        }, 1000);
      });
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <Container>
      <LoginCard>
        <Content>
          <Heading>Welcome back.</Heading>
          {isLoading ? (
            <LoginBtn>
              <BeatLoader size={10} color="#f9f9f9" />
            </LoginBtn>
          ) : (
            <LoginBtn google onClick={signInWithGoogle}>
              <img src="/images/google-icon.png" alt="" /> Continue with Google
            </LoginBtn>
          )}

          <SpacerContainer>
            <hr></hr>
            OR
            <hr></hr>
          </SpacerContainer>
          <Input type="text" placeholder="Enter your email to continue..." />
          <LoginBtn>Continue</LoginBtn>
          <OptionText>
            Don't have an account yet? <span>Sign up for free</span>
          </OptionText>
        </Content>
      </LoginCard>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 82px);
  display: grid;
  place-items: center;
`;

const LoginCard = styled.div`
  width: 30vw;
  height: 50vh;
  box-shadow: 0 4px 24px #0000001a;
  border-radius: 24px;
  display: flex;
  padding: 48px;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 1.75rem;
`;

const LoginBtn = styled.button`
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 1rem;
  border: 1px solid #313131;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: -0.5px;
  background: ${(props) => (props.google ? "#FFFBF5" : "#7743db")};
  color: ${(props) => (props.google ? "" : "#f9f9f9")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const SpacerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  opacity: 0.5;

  hr {
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 12px 28px;
  border-radius: 12px;
  opacity: 0.5;
  transition: all 250ms ease-in-out;
  border: 1px solid #313131;

  &:focus {
    opacity: 1;
    padding: 12px 24px;
    background: #fffbf5;
  }
`;

const OptionText = styled.span`
  text-align: center;

  span {
    text-decoration: underline;
    color: #7743db;
  }
`;
