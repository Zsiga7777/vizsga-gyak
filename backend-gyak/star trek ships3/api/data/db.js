import Database from "better-sqlite3"

const db = Database("./data/db.sqlite")

db.prepare("CREATE TABLE IF NOT EXISTS ships(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, class TEXT, raceFaction TEXT, length NUMBER, crew INTEGER, maxwarp NUMBER, armament TEXT, shieldType TEXT, hullMaterial TEXT, role TEXT) ").run()

export const getAllShips = () => db.prepare("SELECT * FROM ships").all()
export const getById =(id) => db.prepare("SELECT * FROM ships WHERE id = ?").get(id)
export const saveShip = (name, classs, raceFaction, length, crew, maxwarp, armament, shieldType, hullMaterial, role) => db.prepare("INSERT INTO ships(name, class, raceFaction, length, crew, maxwarp, armament, shieldType, hullMaterial, role) VALUES(?,?,?,?,?,?,?,?,?,?)").run(name,classs,raceFaction,length,crew,maxwarp,armament,shieldType,hullMaterial,role)
export const updateShip=(id, name, classs, raceFaction, length, crew, maxwarp, armament, shieldType, hullMaterial, role) => db.prepare("UPDATE ships SET name = ?, class = ?, raceFaction = ?, length = ?, crew = ?, maxwarp = ?, armament = ?, shieldType = ?, hullMaterial = ?, role = ? WHERE id = ? ").run(name,classs,raceFaction,length,crew,maxwarp,armament,shieldType,hullMaterial,role, id)
export const deleteShip = (id) => db.prepare("DELETE FROM ships WHERE id = ?").run(id)