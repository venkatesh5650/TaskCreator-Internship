import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  Input,
  Button,
  RegisterButton,
  ButtonGroup,
} from "./styledComponents";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token); // store JWT
      localStorage.setItem("role", res.data.role.toLowerCase()); // ✅ save role
      localStorage.setItem("userId", res.data.id); // ✅ save user id
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <h2>Login</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <ButtonGroup>
          <Button type="submit">Login</Button>
          <RegisterButton type="button" onClick={() => navigate("/register")}>
            Register
          </RegisterButton>
        </ButtonGroup>
      </Form>
    </Container>
  );
}
