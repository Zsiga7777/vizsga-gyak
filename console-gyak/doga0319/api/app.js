import express from "express";
import * as db from "./util/database.js";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/ships", (req, res) => {
  const ships = db.getAllShips();
  if (!ships) {
    return res.status(404).json({ message: "No ships found" });
  }
  return res.json(ships);
});

app.get("/ships/:id", (req, res) => {
  const ship = db.getShipById(+req.params.id);
  if (!ship) {
    return res.status(404).json({ message: "Ship not found" });
  }
  return res.json(ship);
});

app.post("/ships", (req, res) => {
  const {
    name,
    _class,
    raceFaction,
    length,
    crew,
    maxWarp,
    armament,
    shieldType,
    hullMaterial,
    role,
  } = req.body;
  db.createShip(
    name,
    _class,
    raceFaction,
    length,
    crew,
    maxWarp,
    armament,
    shieldType,
    hullMaterial,
    role,
  );
  return res.status(204).json({ message: "Ship created" });
});

app.put("/ships/:id", (req, res) => {
  const {
    name,
    _class,
    raceFaction,
    length,
    crew,
    maxWarp,
    armament,
    shieldType,
    hullMaterial,
    role,
  } = req.body;
  db.updateShip(
    +req.params.id,
    name,
    _class,
    raceFaction,
    length,
    crew,
    maxWarp,
    armament,
    shieldType,
    hullMaterial,
    role,
  );
  return res.json({ message: "Ship updated" });
});

app.delete("/ships/:id", (req, res) => {
  db.deleteShip(+req.params.id);
  return res.json({ message: "Ship deleted" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});