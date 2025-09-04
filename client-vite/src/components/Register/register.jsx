import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PageContainer, Container, Title, Form, Input, Button, Select } from "./styledComponents";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("intern"); // default role
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/auth/register", {
        name,
        email,
        password,
        role,
      });
      alert("Registration successful! You can now log in.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <PageContainer>
      <Title>Register</Title>
      <Container>
        <Form onSubmit={handleRegister}>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <Select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="intern">Intern</option>
            <option value="manager">Manager</option>
          </Select>
          <Button type="submit">Register</Button>
          {/* ✅ Extra login feature */}
          <Button type="button" onClick={() => navigate("/login")} style={{ marginTop: "10px", backgroundColor: "#007bff" }}>
            Already have an account? Login
          </Button>
        </Form>
      </Container>
    </PageContainer>
  );
}

export default Register;
