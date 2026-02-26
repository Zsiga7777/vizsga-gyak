import Database from "better-sqlite3"
import fs from "fs"

const db = new Database("./db/konyvtar.sqlite")

db.prepare("CREATE TABLE IF NOT EXISTS konyvtar (azon INTEGER PRIMARY KEY, cim TEXT, szerzo TEXT, mufaj TEXT, eladas INTEGER, ev INTEGER)").run()

export const createBook = (azon, cim, szerzo, mufaj, eladas, ev) => db.prepare("INSERT INTO konyvtar (azon, cim, szerzo, mufaj, eladas, ev) VALUES (?,?,?,?,?,?)").run(azon, cim, szerzo, mufaj, eladas, ev)

export const getBooksThatHasLargerEladasThan = (minEladas) => db.prepare("SELECT cim, szerzo FROM konyvtar WHERE eladas >= ?").all(minEladas)

export const getMufajAndBookCount = () => db.prepare("SELECT mufaj, COUNT(cim) as konyvSzam FROM konyvtar GROUP BY mufaj").all()

export const getBooksBySzerzo = (szerzo) => db.prepare("SELECT cim, eladas FROM konyvtar WHERE szerzo = ?").all(szerzo)

export const getBooksBeforeTheGivenEv = (ev) => db.prepare("SELECT cim, ev FROM konyvtar WHERE ev < ?").all(ev)

export const getSzerzoByHavingMoreThanTheGivenNumberOfBooks = (minBook) => db.prepare("SELECT szerzo FROM konyvtar GROUP BY szerzo HAVING COUNT(cim) >= ? ").all(minBook)

export const getBookByCim = (cim) => db.prepare("Select * FROM konyvtar WHERE cim = ?").get(cim)

export const putBook = (cim, eladas) => db.prepare("UPDATE konyvtar SET eladas = ? WHERE cim = ?").run(eladas, cim)

if(getMufajAndBookCount().length == 0){
const filestring = fs.readFileSync("./konyvek.csv", "utf-8" )
const line = filestring.split("\n")
for(let i = 1; i < line.length; i++){
    const data = line[i].split(",")
    createBook(data[0], data[1], data[2], data[3], data[4], data[5])
}

}