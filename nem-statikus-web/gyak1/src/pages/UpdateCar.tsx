import { useEffect, useState } from "react"
import type { Car } from "../types/Car"
import apiclient from "../api/apiclient"
import { toast } from "react-toastify"
import { Button } from "react-bootstrap"
import { useParams } from "react-router"
import Nav from "../Components/Nav"

const UpdateCar = () => {
    const {id} = useParams()
    const [car, setCar] = useState<Car>({
         marka: "",
  modell: "",
  evjarat: 0,
  futas_km: 0,
  uzemanyag: "",
  valto: "",
  szin: "",
  ar: 0,
  images: [],
  leiras: ""
    })

    useEffect(() => {
        apiclient.get(`/auto/${id}`).then((x) => setCar(x.data)).catch(() => toast.error("Autó nem található!"))
    }, [])

    const submit = () => {
        const dto = {
                marka: car.marka,
  modell: car.modell,
  evjarat: car.evjarat,
  futas_km: car.futas_km,
  uzemanyag: car.uzemanyag,
  valto: car.valto,
  szin: car.szin,
  ar: car.ar,
  images: car.images,
  leiras: car.leiras
        }

        apiclient.put(`/autok/${id}`, dto).then(() => {toast.success("Sikeres mentve") })
        .catch(() => toast.error("Sikertelen mentve"))
    }

    return <>
    <Nav/>
    { id ? ( <><h1>Márka:</h1>
      <input
        type="text"
        value={car.marka}
        onChange={(e) => setCar({ ...car, marka: e.target.value })}
      />

     <h1>Modell:</h1>
      <input
        type="text"
        value={car.modell}
        onChange={(e) => setCar({ ...car, modell: e.target.value })}
      />

      <h1>Évjárat:</h1>
      <input
        type="number"
        value={car.evjarat}
        onChange={(e) => setCar({ ...car, evjarat:Number( e.target.value) })}
      />

      <h1>Futási km:</h1>
      <input
        type="number"
        value={car.futas_km}
        onChange={(e) => setCar({ ...car, futas_km:Number( e.target.value) })}
      />
 <h1>Üzemanyag:</h1>
      <input
        type="text"
        value={car.uzemanyag}
        onChange={(e) => setCar({ ...car, uzemanyag: e.target.value })}
      />
       <h1>Váltó:</h1>
      <input
        type="text"
        value={car.valto}
        onChange={(e) => setCar({ ...car, valto: e.target.value })}
      />
       <h1>Szín:</h1>
      <input
        type="text"
        value={car.szin}
        onChange={(e) => setCar({ ...car, szin: e.target.value })}
      />

      <h1>Ár:</h1>
      <input
        type="number"
        value={car.ar}
        onChange={(e) => setCar({ ...car, ar:Number( e.target.value) })}
      />
 <h1>Leírás:</h1>
      <input
        type="text"
        value={car.leiras}
        onChange={(e) => setCar({ ...car, leiras: e.target.value })}
      />
    
      <Button onClick={() => submit}>Mentés</Button>
    </>) : (<h1>Nincs autó!</h1>) }</>

}

export default UpdateCar