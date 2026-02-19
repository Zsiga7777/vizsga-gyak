import express from "express"
import cors from "cors"
import * as db from "./db/db.js"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/elofordulas/:elo", (req, res) => {
    const number = +req.params.elo

    const list = db.getWordWithMinSpawnRate(number)
    if(list.length == 0)
    {
      return res.status(404).json({Message: "Not found!"})
    }
res.status(200).json(list)
})

app.get("/melleknev/:szoreszlet", (req, res) => {
    let szoreszlet = req.params.szoreszlet
  szoreszlet = szoreszlet + "%"
    const list = db.getMnWithGivenStart(szoreszlet)
    if(list.length == 0)
    {
      return res.status(404).json({Message: "Not found!"})
    }
res.status(200).json(list)
})

app.get("/szofajok", (req, res) => {
    const list = db.getSzofajAndWordNumber()
    if(list.length == 0)
    {
      return res.status(404).json({Message: "Not found!"})
    }
res.status(200).json(list)
})

app.get("/gyakorisag/:szam", (req, res) => {
    const szam = +req.params.szam
    const list = db.getWordByMinAppearance(szam)
    if(list.length == 0)
    {
      return res.status(404).json({Message: "Not found!"})
    }
res.status(200).json(list)
})

app.put("/modosit", (req, res) => {
  const {szoto, szofaj, gyakori} = req.body
  if(!szoto || !szofaj || !gyakori){
    return res.status(400).json({message : "Missing data"})
  }

  const szofajok =db.getSzofajs()

  if(!szofajok.some(x => x.szofaj == szofaj)){
     return res.status(400).json({message : "Hibás szófaj!"})
  }
  if(gyakori < 10000){
    return res.status(400).json({message : "Nem megfelelő mennyiség!"})
  }

  const storedData = db.getWordBySzofajAndWord(szofaj, szoto);
  if(!storedData){
    let lastId = db.getLastId()
    const result = db.saveNewWord(lastId + 1, szofaj, szoto, gyakori)
      if(result.changes > 0){
        return res.status(201)
      }
    return res.status(409).json({Message : "Save failed!"})
  }
  else{
    if(gyakori < storedData.gyakori){
       return res.status(400).json({message : "Nem megfelelő mennyiség!"})
    }

    const result = db.updateWord(storedData.azon, szofaj, szoto, gyakori)
 if(result.changes > 0){
        return res.status(204).json()
      }
    return res.status(409).json({Message : "Update failed!"})
  }
})
app.listen(3333, ()=> {console.log("Server runs on 3333")})