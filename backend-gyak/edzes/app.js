import express from "express"
import cors from "cors"
import * as db from "./db/db.js"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/api/hosszu/:perc", (req, res) => {
    const minute = req.params.perc

    const edzesek = db.getEdzesekByMinTime(minute)

    if(edzesek.length == 0){
        return res.status(404).json({message: "Nincs ilyen edzés!"})
    }

    res.status(200).json(edzesek)
})

app.get("/api/vendeg/:name", (req, res) => {
    const name = req.params.name

    const edzesek = db.getEdzesekByNev(name)

    if(edzesek.length == 0){
        return res.status(404).json({message: "Nincs ilyen edzés!"})
    }

    res.status(200).json(edzesek)
})

app.get("/api/aktiv/:darab", (req, res) => {
    const darab = +req.params.darab

    const vendegek = db.getPeopleByMinEdzesCount(darab)

    if(vendegek.length == 0){
        return res.status(404).json({message: "Nincs ilyen vendég!"})
    }

    res.status(200).json(vendegek)
})

app.put("/api/modosit", (req, res) => {
    const {azon, kaloria} = req.body

    if(!azon || !kaloria){
         return res.status(400).json({message: "Nem adott meg minden adatot!"})
    }

    const edzes = db.getById(+azon)

    if(!edzes){
        return res.status(404).json({message: "Nincs ilyen edzés!"})
    }

    if(kaloria < 100){
         return res.status(400).json({message: "Túl alacsony érték!"})
    }
    
if(kaloria < edzes.kaloria){
         return res.status(400).json({message: "Nem megfelelő kalóriaérték!"})
    }
    const result = db.updateCalorie(azon, kaloria)

    if(result.changes > 0){
      return res.status(204).json({})
    }

    res.status(409).json({message: "update failed!"})
})

app.post("/api/ujedzes", (req, res) => {
    const {nev, tipus, ido, kaloria, datum} = req.body

    const edzesTypes = ["kardio", "ero", "joga", "crossfit"]

    if(!nev || !kaloria || !tipus || !ido || !datum){
         return res.status(400).json({message: "Hiányzó adatok."})
    }

    if(!edzesTypes.includes(tipus))
        {
         return res.status(400).json({message: "Hibás edzéstípus."})
    }

    if(ido < 20 || ido > 300)
        {
         return res.status(400).json({message: "Érvénytelen időtartam."})
    }

    if(kaloria < 100 || kaloria > +ido*20){
         return res.status(400).json({message: "Nem megfelelő kalóriaérték."})
    }

    if(new Date() < new Date(datum)){
        return res.status(400).json({message: "A dátum nem lehet jövőbeli."})
    }
    
    const result = db.postEdzes(nev, tipus, ido, kaloria, datum)

    if(result.lastInsertRowid > 0){
      return res.status(201).json({message: "Edzés sikeresen rögzítve",
 "id": result.lastInsertRowid})
    }

    res.status(409).json({message: "post failed!"})
})

app.listen(3333, () => {console.log("server runs on 3333")})