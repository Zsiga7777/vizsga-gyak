import { useState } from "react"
import type { Pizza } from "../types/Pizza"
import NavComponent from "../components/NavComponent"
import { Button } from "react-bootstrap"
import apiclient from "../api/apiclient"
import { toast } from "react-toastify"

const CreatePizzaPage = () => {
    const[pizza, setPizza] = useState<Pizza>({
        nev : "",
        ar : 0,
        leiras : "",
        imageUrl : ""
    })

    const savePizza =() =>{
        apiclient.post("/pizza", pizza).then(() => toast.success("Pizza sikeresen mentve")).catch(() => toast.error("Pizza mentése sikertelen!"))
    }

    return<>
    <NavComponent/>
    <div>
        <label htmlFor="nev">Név:</label>
        <input type="text" id="nev" value={pizza?.nev} onChange={(e) => setPizza({...pizza, nev:e.currentTarget.value})}/>
        <label htmlFor="ar">Ár:</label>
        <input type="number" id="ar" value={pizza?.ar} onChange={(e) => setPizza({...pizza, ar:Number(e.currentTarget.value)})}/>
        <label htmlFor="leiras">Leírás:</label>
        <input type="text" id="leiras" value={pizza?.leiras} onChange={(e) => setPizza({...pizza, leiras:e.currentTarget.value})}/>
        <label htmlFor="kep">Kép:</label>
        <input type="text" id="kep" value={pizza?.imageUrl} onChange={(e) => setPizza({...pizza, imageUrl:e.currentTarget.value})}/>
        <Button onClick={() => savePizza}>Mentés</Button>
        </div></>
}

export default CreatePizzaPage