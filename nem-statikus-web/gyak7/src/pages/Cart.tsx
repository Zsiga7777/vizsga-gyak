import { useEffect, useState } from "react"
import type { Movie } from "../types/Movie"
import apiClient from "../apiClient/apiClient"
import { toast } from "react-toastify"
import { Button, Card, Col, Container, Row } from "react-bootstrap"

const Cart = () => {
     const [movies, setMovies] = useState<Movie[]>([])
    const [cart, setCart] = useState<number[]>(JSON.parse(localStorage.getItem("cart") ?? "[]"))

    useEffect(() => {
        apiClient.get("/movies").then((res) => setMovies(res.data)).catch(() => toast.error("Nem sikerült lekérni!"))
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const remove = (index : number) =>{
        setCart(cart.filter((_, i) => i == index))
    }

    const sum = cart.reduce((total : number, id:number) => {
        const movie = movies.find((m) => m.id == id)
        return total + Number(movie?.price)
    }, 0)

    return(
        <Container>
            <h1>Kosár</h1>
            {cart.length > 0 ? (<>
                
                    <Col>
                        <Row lg={3} className="g-4">
                            {cart.map((id, index) =>{
                                const m = movies.find((m) => m.id == id)
                                return (<Col >
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            {m?.title}
                                        </Card.Title>
                                        <Card.Text style={{marginBottom : 0}}>
                                            Műfaj: {m?.genre}
                                        </Card.Text>
                                        <Card.Text style={{marginBottom : 0}}>
                                            Megjelenés éve: {m?.release_year}
                                        </Card.Text>
                                        <Card.Text style={{marginBottom : 0}}>
                                            Ár: <strong>{m?.price} Ft</strong>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col style={{display: "flex", justifyContent : "end"}}>
                                            <Button variant="danger" onClick={() => remove(index)}>
                                                Eltávolítás
                                            </Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Col>)
                            })}
                            
                        </Row>
                    </Col>
                    <Row>
                        <Col>
                            <h4> Összesen: <strong>{sum} Ft</strong></h4>
                        </Col>
                        <Col style={{display: "flex", justifyContent: "end"}}>
                        <Button variant="secondary" onClick={() => setCart([])}>
                            Kosár ürítése
                        </Button>
                                                </Col>
                    </Row>
                
            </>) : (<>
                <p>A kosár jelenleg üres.</p>
            </>)}
        </Container>
    )
}

export default Cart