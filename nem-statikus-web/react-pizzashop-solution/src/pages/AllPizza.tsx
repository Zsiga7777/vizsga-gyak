import { useEffect, useState } from "react";
import apiClient, { baseURL } from "../api/apiClient";
import type { Pizza } from "../types/Pizza";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://2ffee5c2c6fe685a17db8f90fb239470@o4510912039878656.ingest.de.sentry.io/4510912049774672",
  sendDefaultPii: true,
});

const AllPizza = () => {
  const navigate = useNavigate();

  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient
      .get("/pizzzzzak")
      .then((response) => setPizzak(response.data))
      .catch((error) => {
        toast.error("A pizzák betöltése sikertelen volt");
        Sentry.captureException(error);
      });
  }, []);

  const generateCard = (p: Pizza) => {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`${baseURL}/kepek/${p.imageUrl}`} />
          <Card.Body>
            <Card.Title>{p.nev}</Card.Title>
            <Card.Text>{p.leiras}</Card.Text>
            <Button
              onClick={() => navigate(`/pizza/${p.id}`)}
              variant="success"
            >
              Megtekintés
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Container>
      <Row xs={"auto"} md={"auto"} className="g-4">
        {pizzak.map((i) => generateCard(i))}
      </Row>
    </Container>
  );
};

export default AllPizza;
