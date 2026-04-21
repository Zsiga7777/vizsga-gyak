import Database from "better-sqlite3";

const db = new Database("./data/database.sqlite");

db.prepare(
  `CREATE TABLE IF NOT EXISTS ships (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    class INTEGER NOT NULL,
    raceFaction TEXT NOT NULL,
    length INTEGER NOT NULL,
    crew INTEGER NOT NULL,
    maxWarp DECIMAL NOT NULL,
    armament TEXT NOT NULL,
    shieldType TEXT NOT NULL,
    hullMaterial TEXT NOT NULL,
    role INTEGER NOT NULL)
`,
).run();

export const getAllShips = () => db.prepare("SELECT * FROM ships").all();
export const getShipById = (id) =>
  db.prepare("SELECT * FROM ships WHERE id = ?").get(id);
export const createShip = (
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
) => {
  db.prepare(
    `INSERT INTO ships (name, class, raceFaction, length, crew, maxWarp, armament, shieldType, hullMaterial, role)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  ).run(
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
};

export const updateShip = (
  id,
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
) => {
  db.prepare(
    `UPDATE ships SET name = ?, class = ?, raceFaction = ?, length = ?, crew = ?, maxWarp = ?, armament = ?, shieldType = ?, hullMaterial = ?, role = ? WHERE id = ?`,
  ).run(
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
    id,
  );
};

export const deleteShip = (id) =>
  db.prepare(`DELETE FROM ships WHERE id = ?`).run(id);
