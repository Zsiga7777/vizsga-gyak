import Database from "better-sqlite3"
import fs from "fs"
import path from 'path'
import { fileURLToPath } from 'url'

const db = Database("./db/fitnesz.sqlite")

db.prepare("CREATE TABLE IF NOT EXISTS edzesek (azon INTEGER PRIMARY KEY AUTOINCREMENT, nev TEXT, tipus TEXT, ido INTEGER, kaloria INTEGER, datum TEXT)").run()

export const getById = (id) => db.prepare("SELECT * FROM edzesek WHERE azon = ?").get(id)

export const getEdzesekByMinTime = (min) => db.prepare("SELECT nev, tipus, ido FROM edzesek WHERE ido >= ?").all(min)

export const getEdzesekByNev = (name) => db.prepare("SELECT tipus, ido, datum FROM edzesek WHERE nev = ?").all(name)

export const getPeopleByMinEdzesCount = (min) => db.prepare("SELECT nev FROM edzesek GROUP BY nev HAVING COUNT(tipus) >= ?").all(min)

export const updateCalorie = (id, calorie) => db.prepare("UPDATE edzesek SET kaloria = ? WHERE azon = ?").run(calorie, id)

export const postEdzes = (nev, tipus, ido, kaloria, datum) => db.prepare("INSERT INTO edzesek(nev, tipus, ido, kaloria, datum) VALUES (?,?,?,?,?)").run(nev, tipus, ido, kaloria, datum)

if(db.prepare("SELECT * FROM edzesek").all().length == 0){
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, "edzesek.txt")

const itemsInFile = fs.readFileSync(filePath, "utf-8")
const lines = itemsInFile.split("\n")
for(let i = 1; i < lines.length ; i++){
    const items = lines[i].split("\t")
    postEdzes(items[1], items[2], items[3], items[4], items[5])
}

}