import { useEffect, useState } from "react"
import type { Movie } from "../types/Movie"
import apiClient, { BASE_URL } from "../apiClient/apiClient"
import { toast } from "react-toastify"
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap"

const All = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [cart, setCart] = useState<number[]>(JSON.parse(localStorage.getItem("cart") ?? "[]"))

    useEffect(() => {
        apiClient.get("/movies").then((res) => setMovies(res.data)).catch(() => toast.error("Nem sikerült lekérni!"))
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const generateCard = (m: Movie) => {
        return(
            <Col className="g-4">
            <Card>
                <Carousel interval={null}>
                    {m.images.map((s) => (
                        <Carousel.Item>
                            <img src={`${BASE_URL}/images/${s}`} width={300} height={450} />
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
                        Megjelenés éve: {m.release_year}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col>
                            <Card.Text>
                                Ár: <strong>{m.price} Ft</strong>
                            </Card.Text>
                        </Col>

                        <Col style={{display: "flex", justifyContent : "end"}}>
                        <Button variant="primary" onClick={() => {
                            if(cart.includes(Number(m.id))){
                                toast.warning("A kosár már tartalmazza")
                            }
                            else{
                                setCart([...cart, Number(m.id)])
                                toast.success("Sikeresen a kosárhoz adva")
                            }
                        }}>Kosárba</Button> </Col>
                    </Row>
                </Card.Footer>
                </Card></Col>
        )
    }

    return (
        <Container>
            <Row lg={4}>
                {movies.map((m) => generateCard(m))}
            </Row>
        </Container>
    )
}

export default All