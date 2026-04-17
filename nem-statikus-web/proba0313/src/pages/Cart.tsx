import { useEffect, useState } from 'react';
import type { Pizza } from '../types/Pizza';
import apiClient, { baseURL } from '../api/apiClient';
import { toast } from 'react-toastify';
import { Button, Card, Col, Row } from 'react-bootstrap';
import type { Order } from '../types/Order';

const Cart = () => {
    const [pizzas, setPizzas] = useState<Pizza[]>([]);
    const [cart, setCart] = useState<number[]>(JSON.parse(localStorage.getItem('cart') || '[]'));

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

    const getGroupedCart = () => {
        const counts: Record<number, number> = {};

        for (const id of cart) {
            counts[id] = (counts[id] ?? 0) + 1;
        }

        const grouped: { pizza: Pizza; amount: number }[] = [];
        for (const key in counts) {
            const pizzaId = Number(key);
            const pizza = pizzas.find((p) => p.id === pizzaId);
            if (pizza) {
                grouped.push({ pizza, amount: counts[pizzaId] });
            }
        }

        return grouped;
    };

    const groupedCart = getGroupedCart();

    const total = groupedCart.reduce((sum, item) => sum + item.pizza.ar * item.amount, 0);

    const addOne = (pizzaId: number) => {
        setCart([...cart, pizzaId]);
    };

    const removeOne = (pizzaId: number) => {
        const index = cart.findIndex((id) => id === pizzaId);
        setCart(cart.filter((_, i) => i !== index));
    };

    const placeOrder = async () => {
        if (groupedCart.length === 0) {
            toast.warning('Cart is empty!');
            return;
        }

        const payload: Order[] = groupedCart.map((item) => ({
            pizzaId: Number(item.pizza.id),
            mennyiseg: item.amount,
        }));

        payload.map((item) =>
            apiClient
                .post('/rendelesek', item)
                .then(() => {
                    toast.success('Order placed successfully!');
                    setCart([]);
                })
                .catch((error) => {
                    console.log(error);
                    toast.error('Order failed!');
                }),
        );
    };

    return (
        <>
            <Row>
                {groupedCart.map(({ pizza, amount }) => (
                    <Col key={pizza.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img src={`${baseURL}/kepek/${pizza.imageUrl}`} />
                            <Card.Title>{pizza.nev}</Card.Title>
                            <Card.Body>
                                <p>{pizza.leiras}</p>
                                <p>
                                    <strong>{pizza.ar}</strong> | Mennyiség:{' '}
                                    <strong>{amount}</strong>
                                </p>
                            </Card.Body>
                            <Card.Footer
                                style={{ display: 'flex', justifyContent: 'space-around' }}
                            >
                                <Button onClick={() => removeOne(Number(pizza.id))}>-</Button>
                                <Button onClick={() => addOne(Number(pizza.id))}>+</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Button onClick={() => setCart([])} variant="danger" style={{ marginRight: 8 }}>
                Remove all
            </Button>
            <Button onClick={placeOrder} disabled={groupedCart.length === 0}>
                Order
            </Button>

            <br />
            <label>
                Total is {total} from {cart.length} items
            </label>
        </>
    );
};

export default Cart;
