import { useEffect, useState } from 'react';
import type { Pizza } from '../types/Pizza';
import apiClient, { baseURL } from '../api/apiClient';
import { toast } from 'react-toastify';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const OnePizza = () => {
    const [pizza, setPizza] = useState<Pizza>();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        apiClient
            .get(`/pizzak/${id}`)
            .then((response) => setPizza(response.data))
            .catch((error) => {
                console.log(error);
                toast.error('Loading pizza unsuccessful!');
            });
    }, []);

    return (
        <Row>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img src={`${baseURL}/kepek/${pizza?.imageUrl}`}></Card.Img>
                    <Card.Title>{pizza?.nev}</Card.Title>
                    <Card.Body>
                        <p>{pizza?.leiras}</p>
                        <p>
                            <strong>{pizza?.ar}</strong>
                        </p>
                    </Card.Body>
                    <Card.Footer style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Button onClick={() => navigate(`/edit/${pizza?.id}`)}>Edit</Button>
                        <Button
                            onClick={() => {
                                const isConfirmed = window.confirm(
                                    'Are you sure you want to delete this pizza?',
                                );
                                if (isConfirmed) {
                                    apiClient.delete(`/pizzak/${pizza?.id}`).then(() => {
                                        toast.success('Deleted successfully!');
                                        navigate('/');
                                    });
                                } else {
                                    return;
                                }
                            }}
                        >
                            Delete
                        </Button>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    );
};

export default OnePizza;
