import { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import type { Pizza } from '../types/Pizza';
import apiClient from '../api/apiClient';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const EditPizza = () => {
    const [pizza, setPizza] = useState<Pizza>({ nev: '', leiras: '', ar: 0, imageUrl: '' });
    const { id } = useParams();

    useEffect(() => {
        apiClient
            .get(`/pizzak/${id}`)
            .then((response) => {
                setPizza(response.data);
            })
            .catch((error) => {
                console.log(error);
                toast.error('Adding pizza unsuccessfull!');
            });
    }, []);

    const submit = () => {
        apiClient
            .put(`/pizzak/${id}`, pizza)
            .then(() => toast.success('Pizza added successfully!'))
            .catch((error) => {
                console.log(error);
                toast.error('Editing pizza unsuccessfull!');
            });
    };
    return (
        <Row md={'auto'} className="g-4 justify-content-center">
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>EditPizza</Card.Title>
                    <Card.Body>
                        <h2>Name</h2>
                        <input
                            type="text"
                            onChange={(e) => setPizza({ ...pizza, nev: e.target.value })}
                            value={pizza.nev}
                        />
                        <h2>Description</h2>
                        <textarea
                            onChange={(e) => setPizza({ ...pizza, leiras: e.target.value })}
                            value={pizza.leiras}
                        />
                        <h2>Price</h2>
                        <input
                            type="number"
                            onChange={(e) => setPizza({ ...pizza, ar: Number(e.target.value) })}
                            value={pizza.ar}
                        />
                    </Card.Body>
                    <Card.Footer style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            onClick={() => {
                                submit();
                            }}
                        >
                            Edit pizza
                        </Button>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    );
};

export default EditPizza;
