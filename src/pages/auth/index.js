import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  FormButton,
  Text,
} from "../../components/auth/AuthElement";
import { NavLogo } from "../../components/NavBar/NavBarElements";
import { auth, logInWithEmailAndPassword } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      <div>Loading</div>;
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <>
      <Container>
        <FormWrap>
          <div style={{ margin: "50px 30px" }}>
            <NavLogo to="/">pguide</NavLogo>
          </div>
          <FormContent>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                logInWithEmailAndPassword(email, password);
              }}
            >
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
                htmlFor="email"
                type="text"
                required
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                htmlFor="password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <FormButton type="submit">Continue</FormButton>
              {/* <Link to="/reset">
                <Text>Forgot Password</Text>
              </Link> */}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
