import { useEffect, useState } from "react"
import type { Movie } from "../types/Movie"
import apiClient from "../api/apiClient"
import { toast } from "react-toastify"
import { Button, Card, Col, Container, Row } from "react-bootstrap"

const Cart = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [cart, setCart] = useState<number[]>(JSON.parse(localStorage.getItem("cart") ?? "[]"))

    useEffect(() => {
        apiClient.get("/movies").then((res) => setMovies(res.data)).catch(() => toast.error("Sikertelen"))
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const remove = (index: number) => {
        setCart(cart.filter((_, i) => i !== index))
    }

    const sum = cart.reduce((total, id) => {
        const movie = movies.find((m) => m.id == id)
        return total + Number(movie?.price)
    }, 0)

    return(
        <Container>
            <h1>Kosár</h1>
            {cart.length > 0 ? (
                <>
                <Col>
                <Row lg={3} className="g-4">
                    {cart.map((id, index) => {
                        const movie = movies.find((m) => m.id == id)
                        return (
                            <Col>
                            <Card style={{width : "25rem"}}>
                                <Card.Body>
                                    <Card.Title>
                                        {movie?.title}
                                    </Card.Title>
                                    <Card.Text>Műfaj: {movie?.genre}</Card.Text>
                                    <Card.Text>Megjelenés éve: {movie?.release_year}</Card.Text>
                                    <Card.Text>
                                        Ár: <strong>{movie?.price} Ft</strong>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{display : "flex", justifyContent : "end"}}>
                                    <Button onClick={() => {
                                        remove(index)
                                    }} variant="danger">
                                        Eltávolítás
                                    </Button>
                                </Card.Footer>
                            </Card>
                            </Col>
                        )
                    })}
                </Row>
                </Col>
                <Row>
                    <Col>
                    <h2>
                        Összesen: <strong>{sum} Ft</strong>
                    </h2>
                    </Col>
                    <Col style={{display:"flex", justifyContent:"end"}}>
                        <Button variant="secondary" onClick={() => setCart([])}>
                            Kosár ürítése
                        </Button>
                    </Col>
                </Row>
                </>
            ) : (
                <>
                    <h1>A Kosár jelenleg üres</h1>
                </>
            ) }
        </Container>
    )
}

export default Cart 