import { useEffect, useState } from "react"
import type { Movie } from "../types/Movie"
import apiClient from "../api/apiClient"
import { toast } from "react-toastify"
import { Button, Card, Col, Container, Row } from "react-bootstrap"

const Cart = () => {
     const[movies, setMovies] = useState<Movie[]>([])
    const [cart, setCart] = useState<number[]>(JSON.parse(localStorage.getItem("cart") ?? "[]"))

    useEffect(() => {
        apiClient.get("/movies").then((res) => setMovies(res.data)).catch(() => toast.error("Hiba a lekérés folyamán"))
    }, [])

     useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const remove = (index : number) => {
        setCart(cart.filter((_, i) => i != index))
    }

    const sum = cart.reduce((total : number, id : number ) => {
        const movie = movies.find((m) => m.id == id)
        return total + Number(movie?.price)
    }, 0)

    return(
        <Container>
            <h2>Kosár</h2>
            {cart.length > 0 ? (<>
            <Col>
                <Row lg={3} className="g-4">
                    {cart.map((id, index) =>{
                        const movie = movies.find((m) => m.id == id)
                        return (
                            <Card style={{width : "25rem"}}>
                                <Card.Body>
                                    <Card.Title>
                                        {movie?.title}
                                    </Card.Title>
                                    <Card.Text>
                                        Műfaj: {movie?.genre}
                                    </Card.Text>
                                    <Card.Text>
                                        Megjelenés éve: {movie?.releaseYear}
                                    </Card.Text>
                                    <Card.Text>
                                        Ár: <strong>{movie?.price} Ft</strong>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="danger"  onClick={() => remove(index)}>
                                        Eltávolítás
                                    </Button>
                                </Card.Footer>
                            </Card>
                    )})}
                </Row>
                </Col>
                    <Row>
                        <Col>
                            <h2>Összesen: <strong>{sum} Ft</strong> </h2>
                        </Col>
                        <Col style={{marginLeft: 700}}>
                            <Button variant="secondary" onClick={() => setCart([])}>
                                Kosár kiürítése
                            </Button>
                        </Col>
                    </Row>
            </>) : (<>
            <h1>A kosár üres!</h1>
            </>)}
        </Container>
    )
}

export default Cart