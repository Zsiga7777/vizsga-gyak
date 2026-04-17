import { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import type { Pizza } from '../types/Pizza';
import apiClient from '../api/apiClient';
import { toast } from 'react-toastify';

const AddPizza = () => {
    const [pizza, setPizza] = useState<Pizza>({ nev: '', leiras: '', ar: 0, imageUrl: '' });
    
    const submit = () => {
        apiClient
            .post('/pizzak', pizza)
            .then(() => toast.success('Pizza added successfully!'))
            .catch((error) => {
                console.log(error);
                toast.error('Adding pizza unsuccessfull!');
            });
    };
    return (
        <Row md={'auto'} className="g-4 justify-content-center">
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Title>AddPizza</Card.Title>
                    <Card.Body>
                        <h2>Name</h2>
                        <input
                            type="text"
                            onChange={(e) => setPizza({ ...pizza, nev: e.target.value })}
                        />
                        <h2>Description</h2>
                        <textarea
                            onChange={(e) => setPizza({ ...pizza, leiras: e.target.value })}
                        />
                        <h2>Price</h2>
                        <input
                            type="number"
                            onChange={(e) => setPizza({ ...pizza, ar: Number(e.target.value) })}
                        />
                    </Card.Body>
                    <Card.Footer style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            onClick={() => {
                                submit();
                            }}
                        >
                            Add pizza
                        </Button>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    );
};

export default AddPizza;
