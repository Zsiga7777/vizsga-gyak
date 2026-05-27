import { useEffect, useState } from "react"
import type { Movie } from "../types/Movie"
import apiClient, { DEFAULT_URL } from "../api/apiClient"
import { toast } from "react-toastify"
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap"

const ListPage = () => {
    const[movies, setMovies] = useState<Movie[]>([])
    const [cart, setCart] = useState<number[]>(JSON.parse(localStorage.getItem("cart") ?? "[]"))

    useEffect(() => {
        apiClient.get("/movies").then((res) => setMovies(res.data)).catch(() => toast.error("Hiba a lekérés folyamán"))
    }, [])

     useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const generateCard = (m :Movie) => {
        return(
            <Col>
                <Card>
                     <Carousel interval={null}>
                    
                        {m.images.map((i) => (
                            <Carousel.Item>
                            <img src={`${DEFAULT_URL}/images/${i}`} width={300} height={450} />
                            </Carousel.Item>
                        ))}
                </Carousel>
                    <Card.Body>
                        <Card.Title>
                            {m.title}
                        </Card.Title>
                        <Card.Text>
                            <strong>Műfaj: </strong>{m.genre}
                        </Card.Text>
                        <Card.Text>
                            Megjelenés éve: {m.releaseYear}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col>
                                <Card.Text>
                                    Ár: <strong>{m.price} Ft</strong>
                                </Card.Text>
                            </Col>
                            <Col style={{marginLeft : 80}}>
                                <Button variant="primary" onClick={() => {
                                    if(cart.includes(Number(m.id)))
                                    {
                                        toast.warning("A kosár már tartalmazza")
                                    }
                                    else{
                                    setCart([...cart, Number(m.id)])
                                    toast.success("Sikeresen a kosárba téve.")
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

export default ListPage