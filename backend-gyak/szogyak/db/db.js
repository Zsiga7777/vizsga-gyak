import Database from "better-sqlite3"
import fs  from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const db = Database("./db/database.sqlite")

db.prepare("CREATE TABLE IF NOT EXISTS szogyak (azon INTEGER PRIMARY KEY, szoto TEXT, szofaj TEXT, gyakori INTEGER)").run()

export const getWordWithMinSpawnRate = (spawRate) => db.prepare("SELECT * FROM szogyak WHERE gyakori > ? AND szofaj = 'ige'").all(spawRate)

export const getMnWithGivenStart = (start) => db.prepare("SELECT szoto, gyakori FROM szogyak WHERE szofaj = 'mn' AND szoto LIKE ? ").all(start)

export const getSzofajAndWordNumber = () => db.prepare("SELECT szofaj, COUNT(szoto) AS szam FROM szogyak GROUP BY szofaj").all()

export const getWordByMinAppearance = (min) => db.prepare("SELECT szoto FROM szogyak GROUP BY szoto HAVING COUNT(szoto) > ?").all(min)

export const getSzofajs = () => db.prepare("SELECT DISTINCT(szofaj) FROM szogyak").all()

export const getLastId = () => db.prepare("SELECT MAX(azon) FROM szogyak").get()

export const getWordBySzofajAndWord = (szofaj, word) => db.prepare("SELECT * FROM szogyak WHERE szofaj = ? AND szoto = ?").get(szofaj, word)

export const saveNewWord = (id, szofaj, word, gyakori) => db.prepare("INSERT INTO szogyak (azon, szoto, szofaj, gyakori) VALUES (?,?,?,?)").run(id, word, szofaj, gyakori)

export const updateWord = (id, szofaj, word, gyakori) => db.prepare("UPDATE szogyak SET gyakori = ? WHERE azon = ? AND szoto = ? AND szofaj = ?").run(gyakori, id, word, szofaj)

if(getSzofajs().length == 0){
    const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, 'szo10000.txt')
    const data = fs.readFileSync(filePath, 'utf8')
    const separatedData = data.split("\n")
    
    for(let i = 1; i < separatedData.length; i++)
    {
        const separatedLine = separatedData[i].split("\t");
        saveNewWord(separatedLine[0], separatedLine[2], separatedLine[1], separatedLine[3])
    }
}