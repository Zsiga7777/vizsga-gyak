import { useEffect, useState } from "react"
import type { Car } from "../types/Car"
import apiclient, { DEFAULT_ROUTE } from "../api/apiclient"
import { toast } from "react-toastify"
import Nav from "../Components/Nav"
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router"

const AllCar = () => {
    const [cars, setCars] = useState<Car[]>([])
    const [cart, setCart] = useState<number[]>(JSON.parse(localStorage.getItem("cart") ?? "[]"))
    const navigate = useNavigate()

    useEffect(() => {
        apiclient.get("/autok").then((x) => setCars(x.data)).catch(() => toast.error("Hiba az autók betöltésénél!"))
    }, [])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const deleteCar = (id:number) => {
        apiclient.delete(`/auto/${id}`).then(() => {
            setCars(cars.splice(cars.findIndex((x) => x.id == id), 1))
            toast.success("Autó sikeresen törölve!")
        })
    }

    return<>
    <Nav/>
    <Container>
        <Row xs={"auto"}  md={"auto"} className="g-4">
            {cars.map((c) => (
                 <Col>
            <Card>
               <Card.Img variant="top" src={`${DEFAULT_ROUTE}/kepek/${c.images[0]}`} />
                <Card.Title>
                    {c.marka}, {c.modell}
                </Card.Title>
                <Card.Body>
                    {c.leiras}
                    <Button onClick={() => {
                        setCart([...cart, Number(c.id)])
                        toast.success("Autó sikeresen hozzáadva a kosárhoz.")
                    }}>Kosárba</Button>
                    <Button onClick={() => deleteCar(c.id!)}>Törlés</Button>
                    <Button onClick={() => navigate(`/updateCar/${c.id}`)}>Módosítás</Button>
                    <Button onClick={() => navigate(`/car/${c.id}`)}>Megtekintés</Button>
                </Card.Body>
            </Card>
            </Col>
            ))}
           
        </Row>
    </Container>
    </>
}

export default AllCar