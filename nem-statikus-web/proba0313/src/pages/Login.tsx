import { useState } from "react";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { Col, Card, Button, Row, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import type { User } from "../types/User";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({ username: "", password: "" });

  const submit = () => {
    apiClient
      .post("/login", user)
      .then(() => {
        localStorage.setItem("credentials", JSON.stringify(user));
        toast.success("Login successful!");
        navigate("/");
      })
      .catch(() => toast.error("Login failed!"));
  };

  return (
    <Container>
      <Row xs={"auto"} md={"auto"} className="g-4 justify-content-center">
        <Col>
          <Card>
            <Card.Title>Login</Card.Title>
            <Card.Body>
              <h1>Username:</h1>
              <input
                type="text"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />

              <h1>Password:</h1>
              <input
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </Card.Body>
            <Card.Footer className="text-center">
              <Button onClick={submit} variant="primary">
                Login
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
