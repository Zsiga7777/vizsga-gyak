import { useEffect, useState } from "react"
import type { Pizza } from "../types/Pizza"
import apiclient, { DEFAULT_ROUTE } from "../api/apiclient"
import { toast } from "react-toastify"
import NavComponent from "../components/NavComponent"
import { Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router"

const AllPizzaPage = () => {
    const [pizzas, setPizzas] = useState<Pizza[]>([])
    const [cart, setCart] = useState<number[]>(JSON.parse(localStorage.getItem("cart") ?? "[]"))
    const navigate = useNavigate()

    useEffect(() => {
        apiclient.get("/pizzak").then((x) => setPizzas(x.data)).catch(() => toast.error("Pizzák nem betölthetők!"))
    }, [])

    const deletePizza = (id :number) => {
        apiclient.delete(`/pizza/${id}`).then(() => {
            setPizzas(pizzas.filter((x) => x.id != id))
            toast.success("Pizza sikeresen törölve!")
        }).catch(() => toast.error("Pizza nem törölhető!"))
    }

    const addPizzaToCart =(id:number) => {
        setCart([...cart, id])
        localStorage.setItem("cart", JSON.stringify([...cart, id]) )
    }

    return<>
    <NavComponent/>
    {pizzas.length != 0 ? (<>
    <div>
        {pizzas.map((p) => (
        <Card>
            <Card.Img src={`${DEFAULT_ROUTE}/kepek/${p.imageUrl}`} />
            <Card.Title>{p.nev}</Card.Title>
            <Card.Text>
               <p>{p.ar} Ft</p> 
                <p>{p.leiras}</p>
                <div>
                    <Button onClick={() => navigate(`/updatePizza/${p.id}`)}>Módosítás</Button>
                    <Button onClick={() => deletePizza(p.id!)}>Törlés</Button>
                    <Button onClick={() => addPizzaToCart(p.id!)}>Kosárba</Button>
                    <Button onClick={() => navigate(`/onePizza/${p.id}`)}>Megtekintés</Button>
                </div>
            </Card.Text>
        </Card>
        ))}
      
    </div>
    
    
    </>) : (<><h1>Nincsenek pizzák</h1></>)}
    
    </>

}

export default AllPizzaPage