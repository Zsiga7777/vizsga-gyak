import express from "express"
import cors from "cors"
import * as db from "./data/database.js"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/api/ships", (req, res) => {
    const ships = db.getAllShips()
    if(ships.length == 0){
        return res.status(404).json({Message : "Ships not found"})
    }
    res.status(200).json(ships)
})
app.get("/api/ships/:id", (req, res) => {
      const ship = db.getShipById(+req.params.id)
    if(!ship){
        return res.status(404).json({Message : "Ship not found"})
    }
    res.status(200).json(ship)
})
app.post("/api/ships", (req, res) => {
    const {name, Class, raceFaction, length , crew , maxWarp , armament , shieldType , hullMaterial , role} = req.body

    if(!name || !Class|| !raceFaction|| !length || !crew || !maxWarp || !armament || !shieldType || !hullMaterial || !role)
    {
        return res.status(400).json({Message : "Missing data"})
    }
    const result = db.saveShip(name, Class, raceFaction, length , crew , maxWarp , armament , shieldType , hullMaterial , role)

    if(result.lastInsertRowid == 0){
        return res.status(409).json({message: "unable to save"})
    }

    res.status(201).json()
})
app.put("/api/ships/:id", (req, res) => {
     const {name, Class, raceFaction, length , crew , maxWarp , armament , shieldType , hullMaterial , role} = req.body

    if(!name || !Class|| !raceFaction|| !length || !crew || !maxWarp || !armament || !shieldType || !hullMaterial || !role)
    {
        return res.status(400).json({Message : "Missing data"})
    }
    const result = db.updateShip(+req.params.id, name, Class, raceFaction, length , crew , maxWarp , armament , shieldType , hullMaterial , role)

    if(result.changes == 0){
        return res.status(409).json({message: "unable to update"})
    }

    res.status(204).json()
})
app.delete("/api/ships/:id", (req, res) => {
     const result = db.deleteShip(+req.params.id)
    if(result.changes == 0){
        return res.status(404).json({Message : "Ship not found"})
    }
    res.status(204).json()
})

app.listen(3333, () => console.log("Szerver fut a 3333-on"))
