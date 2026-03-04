import { useEffect, useState } from "react"
import { useParams } from "react-router"
import type { Car } from "../types/Car"
import apiclient, { DEFAULT_ROUTE } from "../api/apiclient"
import { toast } from "react-toastify"
import Nav from "../Components/Nav"

const OneCar = () => {
    const {id} = useParams()
    const [car, setCar] = useState<Car>()

    useEffect(() => {
        apiclient.get(`/auto/${id}`).then((x) => setCar(x.data)).catch(() => toast.error("Hiba az autó betöltésénél!"))
    })

    return<>
    <Nav/>
    {car? (<div> 
         {car.images.map((i) => (
                    <img src={`${DEFAULT_ROUTE}/kepek/${i}`} width={300} height={300}/>
                ))}
                <h1>Márka: {car.marka}</h1>
                <h1>Modell: {car.modell}</h1>
                <h1>Évjárat: {car.evjarat}</h1>
                <h1>Futási km: {car.futas_km}</h1>
                <h1>Szín: {car.szin}</h1>
                <h1>Üzemanyag: {car.uzemanyag}</h1>
                <h1>Váltó: {car.valto}</h1>
                <p>Leírás: {car.leiras}</p>

    </div>) : (<h1>Nincs autó</h1>)}
    
    </>

}

export default OneCar