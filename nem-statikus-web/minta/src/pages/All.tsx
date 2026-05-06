import { useEffect, useState } from "react"
import type { Movie } from "../types/Movie"
import apiClient, { DEFAULT_ROUTE } from "../api/apiClient"
import { toast } from "react-toastify"
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap"

const All = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [cart, setCart] = useState<number[]>(JSON.parse(localStorage.getItem("cart") ?? "[]"))

    useEffect(() => {
        apiClient.get("/movies").then((res) => setMovies(res.data)).catch(() => toast.error("Sikertelen"))
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const generateCard = (m : Movie) => {
        return (
            <Col>
                <Card>
                    <Carousel interval={null}>
                        {m.images.map((s) => (
                            <Carousel.Item>
                                <img src={`${DEFAULT_ROUTE}/images/${s}`} width={300} height={450} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <Card.Body>
                        <Card.Title>
                            {m.title}
                        </Card.Title>
                        <Card.Text>
                            <strong>Műfaj: </strong> {m.genre}
                        </Card.Text>
                        <Card.Text>
                            Megjelenés éve: {m.release_year}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col>
                                Ár: <strong>{m.price} Ft</strong>
                            </Col>
                            <Col style={{marginLeft: 80}}>
                                <Button onClick={() =>{
                                    if(!cart.includes(Number(m.id))){
                                        toast.success("Sikeresen a kosárba tetted!")
                                        setCart([...cart, Number(m.id)])
                                    }else{
                                        toast.warning("Ez a termék már a kosárban van!")
                                    }
                                }}>
                                    Kosárba
                                </Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Col>
        )
    }

    return(
        <Container>
            <Col>
                <Row lg={4} className="g-4">
                    {movies.map((m) => generateCard(m))}
                </Row>
            </Col>
        </Container>
    )
}

export default All