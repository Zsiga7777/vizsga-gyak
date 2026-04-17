import { useEffect, useState } from 'react';
import type { Pizza } from '../types/Pizza';
import apiClient, { baseURL } from '../api/apiClient';
import { toast } from 'react-toastify';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AllPizza = () => {
    const [pizzas, setPizzas] = useState<Pizza[]>([]);
    const [cart, setCart] = useState<number[]>(JSON.parse(localStorage.getItem('cart') || '[]'));
    const navigate = useNavigate();

    useEffect(() => {
        apiClient
            .get('/pizzak')
            .then((response) => setPizzas(response.data))
            .catch((error) => {
                console.log(error);
                toast.error('Loading pizzas unsuccessful!');
            });
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const generateCard = (pizza: Pizza) => {
        return (
            <Col key={pizza?.id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img src={`${baseURL}/kepek/${pizza.imageUrl}`}></Card.Img>
                    <Card.Title>{pizza.nev}</Card.Title>
                    <Card.Body>
                        <p>{pizza.leiras}</p>
                        <p>
                            <strong>{pizza.ar}</strong>
                        </p>
                    </Card.Body>
                    <Card.Footer style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Button onClick={() => navigate(`/${pizza.id}`)} variant="success">
                            View
                        </Button>
                        <Button
                            onClick={() => {
                                setCart([...cart, Number(pizza.id)]);
                                toast.success(`${pizza.nev} added to cart!`);
                            }}
                        >
                            Add to cart
                        </Button>
                    </Card.Footer>
                </Card>
            </Col>
        );
    };

    return (
        <>
            <Button
                onClick={() => navigate('/cart')}
                style={{ position: 'absolute', top: '0', right: '0', margin: '15px' }}
            >
                Cart ({cart.length})
            </Button>
            <Row md={'auto'} xs={'auto'} className="g-4 justify-content-center">
                {pizzas.map((i) => generateCard(i))}
            </Row>
            ;
        </>
    );
};

export default AllPizza;
