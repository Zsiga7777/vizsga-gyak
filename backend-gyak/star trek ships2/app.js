import express from "express"
import cors from "cors"
import * as db from "./data/database.js"

const app = express()
app.use(express.json())
app.use(cors())

const roleEnum = {
    A : 0,
    B : 1,
    C : 2,
    D : 3,
    E : 4,
    F : 5,
    G : 6,
    H : 7,
    I : 8,
    J : 9
}

app.get("/api/ships", (req, res) => {
const ships = db.getAll();
if(ships.length == 0){
    return res.status(404).json({message: "Ships not found"})
}
res.status(200).json(ships)
})

app.get("/api/ships/:id", (req, res) => {
    const id = +req.params.id;
const ship = db.getById(id);
if(!ship){
    return res.status(404).json({message: "Ship not found"})
}
res.status(200).json(ship)
})

app.delete("/api/ships/:id", (req, res) => {
    const id = +req.params.id;
const ship = db.deleteShip(id);
if(ship.changes == 0){
    return res.status(404).json({message: "Ship not found"})
}
res.status(204).json()
})

app.post("/api/ships", (req, res) => {
    const {name, classs, raceFaction, length, crew, maxwarp, armament, shieldType, hullMaterial, role } = req.body
    if(!name || !classs || !raceFaction || !length || !crew || !maxwarp || !armament || !shieldType || !hullMaterial|| !role){
        return res.status(400).json({message: "Missing data"})
    }
    if(roleEnum[role] == undefined){
        return res.status(400).json({message: "Invalid role"})
    }
    const result = db.save(name, classs, raceFaction, length, crew, maxwarp, armament, shieldType, hullMaterial, roleEnum[role])
    if(!result.lastInsertRowid){
        return res.status(409).json({message: "Save failed"})
    }
    res.status(201).json()
})

app.put("/api/ships/:id", (req, res) => {
    const {name, classs, raceFaction, length, crew, maxwarp, armament, shieldType, hullMaterial, role } = req.body
    const id = +req.params.id;

const ship = db.getById(id);
if(!ship){
    return res.status(404).json({message: "Ship not found"})
}
    if(!name || !classs || !raceFaction || !length || !crew || !maxwarp || !armament || !shieldType || !hullMaterial|| !role){
        return res.status(400).json({message: "Missing data"})
    }

    if(!roleEnum[role]){
        return res.status(400).json({message: "Invalid role"})
    }
    const result = db.update(id, name, classs, raceFaction, length, crew, maxwarp, armament, shieldType, hullMaterial, roleEnum[role])
    if(result.changes == 0){
        return res.status(409).json({message: "Update failed"})
    }
    res.status(204).json()
})
app.listen(4444, () => {
    console.log("Szerver fut")
})