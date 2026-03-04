import { useEffect, useState } from "react"
import type { Pizza } from "../types/Pizza"
import apiclient, { DEFAULT_ROUTE } from "../api/apiclient"
import { toast } from "react-toastify"
import { Button } from "react-bootstrap"
import NavComponent from "../components/NavComponent"

const CartPage = () => {
    const [cart, setCart] = useState<number[]>(JSON.parse(localStorage.getItem("cart") ?? "[]"))
    const [pizzas, setPizzas] = useState<Pizza[]>([])

    useEffect(() => {
        if(cart.length != 0){
            cart.map((x) => {
                apiclient.get(`/pizza/${x}`).then((y) => setPizzas([...pizzas, y.data])).catch(() => toast.error("Nem sikerült betölteni a pizzálat!"))
            })
        }
    }, []) 

const deleteFromCart =(id : number) => {
    setCart(cart.filter((x) => x != id))
    localStorage.setItem("cart", JSON.stringify(cart.filter((x) => x != id)))
    setPizzas(pizzas.filter((x) => x.id != id))
}

    return <><NavComponent/>
        {pizzas.length != 0 ? (<>
        {pizzas.map((p) => (
            <div>
                <h3>{p.nev}</h3>
                <img src={`${DEFAULT_ROUTE}/kepek/${p.imageUrl}`} alt="" />
                <h4>{p.ar} Ft</h4>
                <p>{p.leiras}</p>
                <Button onClick={() => deleteFromCart(p.id!)}>Törlés a kosárból</Button>
            </div>
        ))}
        
        
        </>) : (<><h1>Üres a kosár!</h1></>)}
    </>
}

export default CartPage