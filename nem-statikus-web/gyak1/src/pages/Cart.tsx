import { useState } from "react"
import Nav from "../Components/Nav"
import type { Car } from "../types/Car"
import { Button, Row, Table } from "react-bootstrap"
import { toast } from "react-toastify"

const Cart = () => {
const [cart, setCart] = useState<number[]>(JSON.parse(localStorage.getItem("cart") ?? "[]"))
const [cars, setCars] = useState<Car[]>([])

const deleteFromCart = (id: number) =>{
   setCart(cart.filter((x) => x != id))
   localStorage.setItem("cart", JSON.stringify(cart.filter((x) => x != id)))
   setCars(cars.filter((x) => x.id != id))
   toast.success("Autó eltávolítva a kosárból!")
}

return <>
    <Nav/>
    <h1>Kosár tartalma</h1>
    {cart.length == 0 ? (<h1>Üres a kosár!</h1>) : ( <table>
        <tr>
            <th>Márka</th>
            <th>Modell</th>
            <th>Futási km</th>
            <th>Szín</th>
            <th>Ár</th>
        </tr>
        {cars.map((c) => (
            <tr>
                <td>{c.marka}</td>
                <td>{c.modell}</td>
                <td>{c.futas_km}</td>
                <td>{c.szin}</td>
                <td>{c.ar} Ft</td>
                <td><Button onClick={() => deleteFromCart(c.id!)}>Törlés</Button></td>
            </tr>
        ))}
        
         </table>)}
</>
}

export default Cart