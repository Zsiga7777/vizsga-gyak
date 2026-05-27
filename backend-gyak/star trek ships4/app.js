import express from "express"
import cors from "cors"
import * as db from "./db/db.js"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/api/ships", (req, res) => {
    const ships = db.getAll()
    if(ships.length >0)
    {
        return res.status(200).json(ships)
    }
    res.status(404).json({message : "Hajók nem találhatók."})
})

app.get("/api/ships/:id", (req, res) => {
    const ship = db.getById(+req.params.id)
    if(!ship)
    {
        return res.status(404).json({message : "Hajó nem található."})
    }
    res.status(200).json(ship)
})

app.post("/api/ships", (req, res) => {
    const {name, classs, raceFaction, length, crew, maxWarp, armament, shieldType, hullMaterial, role} = req.body
    if(!name || !classs || !raceFaction || !length || !crew || !maxWarp || !armament || !shieldType || !hullMaterial || !role)
    {
        return res.status(400).json({message : "Hiányzó adat."})
    }
    const result = db.saveShip(name, classs, raceFaction, length, crew, maxWarp, armament, shieldType, hullMaterial, role)
    if(!result.lastInsertRowid){
        return res.status(409).json({message : "Nem sikerült menteni."})
    }
    res.status(201).json()
})

app.put("/api/ships/:id", (req, res) => {
    const {name, classs, raceFaction, length, crew, maxWarp, armament, shieldType, hullMaterial, role} = req.body
    if(!name || !classs || !raceFaction || !length || !crew || !maxWarp || !armament || !shieldType || !hullMaterial || !role)
    {
        return res.status(400).json({message : "Hiányzó adat."})
    }
    const result = db.updateShip(+req.params.id, name, classs, raceFaction, length, crew, maxWarp, armament, shieldType, hullMaterial, role)
    if(result.changes == 0){
        return res.status(409).json({message : "Nem sikerült frissíteni."})
    }
    res.status(204).json()
})

app.delete("/api/ships/:id", (req, res) => {
    const result = db.deleteById(+req.params.id)
    if(result.changes == 0)
    {
        return res.status(404).json({message : "Hajó nem található."})
    }
    res.status(204).json()
})

app.listen(3333,() =>{
    console.log("Szerver fut a 3333-as porton.")
})