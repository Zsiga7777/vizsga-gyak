import express from "express"
import cors from "cors"
import  * as db from "./db/db.js"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/api/nepszeru/:mennyiseg", (req, res) =>{
    const mennyiseg = +req.params.mennyiseg;

    const books = db.getBooksThatHasLargerEladasThan(mennyiseg)
    if(books.length == 0)
    {
        return res.status(404).json({message : "Books not found"})
    }
    res.status(200).json(books)
})

app.get("/api/mufaj", (req, res) =>{

    const mufajs = db.getMufajAndBookCount()
    if(mufajs.length == 0)
    {
        return res.status(404).json({message : "Mufajs not found"})
    }
    res.status(200).json(mufajs)
})

app.get("/api/szerzo/:szerzo", (req, res) =>{
    const szerzo = req.params.szerzo;

    const books = db.getBooksBySzerzo(szerzo)
    if(books.length == 0)
    {
        return res.status(404).json({message : "Books not found"})
    }
    res.status(200).json(books)
})

app.get("/api/regiek/:ev", (req, res) =>{
    const ev = +req.params.ev;

    const books = db.getBooksBeforeTheGivenEv(ev)
    if(books.length == 0)
    {
        return res.status(404).json({message : "Books not found"})
    }
    res.status(200).json(books)
})

app.get("/api/tobbszerzo/:darab", (req, res) =>{
    const darab = +req.params.darab;

    const szerzok = db.getSzerzoByHavingMoreThanTheGivenNumberOfBooks(darab)
    if(szerzok.length == 0)
    {
        return res.status(404).json({message : "Szerzo not found"})
    }
    res.status(200).json(szerzok)
})

app.put("/api/eladas", (req, res) => {
    const {cim, eladas} = req.body
    if(!cim || !eladas){
        return res.status(400).json({message : "Missing data!"})
    }

    const book = db.getBookByCim(cim)
    if(!book){
        return res.status(404).json({message : "Nincs ilyen könyv!"})
    }
    if(book.eladas > eladas)
    {
        return res.status(400).json({message : "Nem megfelelő eladási szám!"})
    }
    if(eladas < 100000)
    {
        return res.status(400).json({message : "Túl alacsony érték!"})
    }
    const result = db.putBook(cim, eladas)
    if(result.changes == 0){
        return res.status(409).json({message : "Could'nt update!"})
    }
    res.status(204).json()
})

app.listen(3333, () => {
    console.log("Szerver runs on 3333")
})