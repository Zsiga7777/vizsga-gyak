import { useParams } from "react-router"
import NavComponent from "../components/NavComponent"
import { useEffect, useState } from "react"
import type { Pizza } from "../types/Pizza"
import apiclient, { DEFAULT_ROUTE } from "../api/apiclient"
import { toast } from "react-toastify"
import { Card } from "react-bootstrap"

const OnePizzaPage = () =>  {
    const {id} = useParams()
    const[pizza, setPizza] = useState<Pizza>()

    useEffect(() => {
        apiclient.get(`/pizza/${id}`).then((x) => setPizza(x.data)).catch(() => toast.error("Nem található ilyen pizza"))
    }, [])
    return <>
    <NavComponent/>
    <Card>
            <Card.Img src={`${DEFAULT_ROUTE}/kepek/${pizza?.imageUrl}`} />
            <Card.Title>{pizza?.nev}</Card.Title>
            <Card.Text>
               <p>{pizza?.ar} Ft</p> 
                <p>{pizza?.leiras}</p>
                
            </Card.Text>
        </Card></>
}

export default OnePizzaPage