import Database from "better-sqlite3"

const db = Database("./data/db.sqlite")
db.prepare("CREATE TABLE IF NOT EXISTS ships(Id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Class TEXT, RaceFaction TEXT, Length INTEGER, Crew INTEGER, MaxWarp NUMBER, Armament TEXT, ShieldType TEXT, HullMaterial TEXT, Role TEXT)").run()

export const getAllShips = () => db.prepare("SELECT * FROM ships").all()
export const getShipById = (id) => db.prepare("SELECT * FROM ships WHERE Id = ?").get(id)
export const saveShip = (name, Class, raceFaction, length , crew , maxWarp , armament , shieldType , hullMaterial , role) => db.prepare("INSERT INTO ships(Name, Class, RaceFaction, Length , Crew , MaxWarp , Armament , ShieldType , HullMaterial , Role) VALUES(?,?,?,?,?,?,?,?,?,?)").run(name,Class,raceFaction,length,crew,maxWarp,armament,shieldType,hullMaterial,role)
export const updateShip = (id, name, Class, raceFaction, length , crew , maxWarp , armament , shieldType , hullMaterial , role) => db.prepare("UPDATE ships SET Name = ?, Class = ?, RaceFaction = ?, Length = ? , Crew = ? , MaxWarp = ? , Armament = ? , ShieldType = ? , HullMaterial = ? , Role = ? WHERE Id = ? ").run(name,Class,raceFaction,length,crew,maxWarp,armament,shieldType,hullMaterial,role, id)
export const deleteShip = (id) => db.prepare("DELETE FROM ships WHERE Id = ?").run(id)