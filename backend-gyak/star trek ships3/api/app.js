import * as db from "./data/db.js"
import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/api/ships", (req, res) => {
    const ships = db.getAllShips()
    if(ships.length == 0){
        return res.status(404).json({message : "Ships not found"})
    }
    res.status(200).json(ships)
})

app.get("/api/ships/:id", (req, res) => {
    const ship = db.getById(+req.params.id)
    if(!ship){
        return res.status(404).json({message : "Ship not found"})
    }
    res.status(200).json(ship)
})

app.delete("/api/ships/:id", (req, res) => {
    const result = db.deleteShip(+req.params.id)
    if(result.changes != 1){
        return res.status(404).json({message : "Ship not found"})
    }
    res.status(204).json()
})

app.post("/api/ships", (req, res) => {
    const {name, classs, raceFaction, length, crew, maxwarp, armament, shieldType, hullMaterial, role} = req.body
    if(!name || !classs || !raceFaction || !length || !crew || !maxwarp || !armament || !shieldType || !hullMaterial || !role){
        return res.status(400).json({message : "Missing data"})
    }
    const result = db.saveShip(name, classs, raceFaction, length, crew, maxwarp, armament, shieldType, hullMaterial, role)
    if(!result.lastInsertRowid)
    {
return res.status(409).json({message : "Ship couldn't be saved"})
    }
    res.status(201).json()
})

app.put("/api/ships/:id", (req, res) => {
    const id = +req.params.id
    const {name, classs, raceFaction, length, crew, maxwarp, armament, shieldType, hullMaterial, role} = req.body
    if(!name || !classs || !raceFaction || !length || !crew || !maxwarp || !armament || !shieldType || !hullMaterial || !role){
        return res.status(400).json({message : "Missing data"})
    }
    const result = db.updateShip(id, name, classs, raceFaction, length, crew, maxwarp, armament, shieldType, hullMaterial, role)
    if(result.changes != 1)
    {
return res.status(409).json({message : "Ship couldn't be updated"})
    }
    res.status(204).json()
})

app.listen(3333, () => {
    console.log("Szerver fut a 3333-as porton.")
})