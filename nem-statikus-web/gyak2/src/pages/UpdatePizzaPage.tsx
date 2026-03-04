import { useEffect, useState } from "react"
import { useParams } from "react-router"
import type { Pizza } from "../types/Pizza"
import apiclient from "../api/apiclient"
import { toast } from "react-toastify"
import NavComponent from "../components/NavComponent"
import { Button } from "react-bootstrap"

const UpdatePizzaPage = () => {
    const {id} = useParams()
    const[pizza, setPizza] = useState<Pizza>()

    useEffect(() => {
        apiclient.get(`/pizza/${id}`).then((x) => setPizza(x.data)).catch(() => toast.error("Nem található ilyen pizza"))
    }, [])

    const savePizza =() =>{
        apiclient.put(`/pizza/${id}`, pizza).then(() => toast.success("Pizza sikeresen mentve")).catch(() => toast.error("Pizza mentése sikertelen!"))
    }

    return<>
    <NavComponent/>
    {pizza? (<><div>
        <label htmlFor="nev">Név:</label>
        <input type="text" id="nev" value={pizza?.nev} onChange={(e) => setPizza({...pizza, nev:e.currentTarget.value})}/>
        <label htmlFor="ar">Ár:</label>
        <input type="number" id="ar" value={pizza?.ar} onChange={(e) => setPizza({...pizza, ar:Number(e.currentTarget.value)})}/>
        <label htmlFor="leiras">Leírás:</label>
        <input type="text" id="leiras" value={pizza?.leiras} onChange={(e) => setPizza({...pizza, leiras:e.currentTarget.value})}/>
        <label htmlFor="kep">Kép:</label>
        <input type="text" id="kep" value={pizza?.imageUrl} onChange={(e) => setPizza({...pizza, imageUrl:e.currentTarget.value})}/>
        <Button onClick={() => savePizza}>Mentés</Button>
        </div></>) : (<><h1>Nincs ilyen pizza</h1></>)}
    </>
}

export default UpdatePizzaPage