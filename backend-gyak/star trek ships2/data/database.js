import Database from "better-sqlite3"

const db = new Database("./data/db.sqlite")

db.prepare("CREATE TABLE IF NOT EXISTS ships (Id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Class INTEGER, RaceFaction TEXT, Length INTEGER, Crew INTEGER, MaxWarp NUMBER, Armament TEXT, ShieldType TEXT, HullMaterial TEXT, Role INTEGER)").run();

export const getAll =() => db.prepare("SELECT * FROM ships").all()
export const getById = (id) => db.prepare("SELECT * FROM ships WHERE Id = ?").get(id)
export const save = (name, classs, raceFaction, length, crew, maxwarp, armament, shieldType, hullMaterial, role) => db.prepare("INSERT INTO ships (Name, Class, RaceFaction, Length, Crew, Maxwarp, Armament, ShieldType, HullMaterial, Role) VALUES(?,?,?,?,?,?,?,?,?, ?)").run(name, classs, raceFaction, length, crew, maxwarp, armament, shieldType,hullMaterial, role)
export const update = (id, name, classs, raceFaction, length, crew, maxwarp, armament, shieldType, hullMaterial, role)=> db.prepare("UPDATE ships SET Name = ?, Class = ?, RaceFaction = ?, Length = ?,  Crew = ?, MaxWarp = ?, Armament = ?, ShieldType = ?, HullMaterial = ?, Role = ?  WHERE Id = ? ").run(name, classs, raceFaction, length, crew, maxwarp, armament, shieldType,hullMaterial, role, id)
export const deleteShip = (id) => db.prepare("DELETE FROM ships WHERE Id = ?").run(id)

if(getAll().length == 0){
    db.prepare("INSERT INTO ships (Name, Class, RaceFaction, Length, Crew, MaxWarp, Armament, ShieldType, HullMaterial, Role) VALUES('VSS-1000', '4', 'Vulcan', 425, 141, 7.15, 'Pulse Cannons', 'Adaptive Shields', 'Composite Hull', '4'),('IKS-1001', '4', 'Klingon', 83, 762, 6.56, 'Polaron Beams', 'Ablative Shields', 'Neutronium Alloy', '4'),('IKS-1002', '6', 'Klingon', 1275, 230, 8.25, 'Plasma Torpedoes', 'Deflector Shields', 'Neutronium Alloy', '6'),('CSS-1003', '2', 'Cardassian', 480, 1134, 9.26, 'Photon Torpedoes', 'Regenerative Shields', 'Neutronium Alloy', '2'),('VSS-1004', '6', 'Vulcan', 1343, 292, 7.45, 'Cutting Beam', 'Deflector Shields', 'Composite Hull', '6'),('FMS-1005', '3', 'Ferengi', 1185, 192, 8.38, 'Pulse Cannons', 'Ablative Shields', 'Composite Hull', '3')").run()
}