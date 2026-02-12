import express from "express"
import * as db from "./db/db.js"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())
const port = 3321

app.get("/nyiltnap/api/v1/telepules/:cityName", (req, res) => {
    const cityName = req.params.cityName
    if(!cityName){
        return res.status(400).json({message : "Invalid city name!"})
    }
    const studentNames = db.getStudentNamesByCity(cityName)
    if(studentNames.length == 0)
    {
        return res.status(404).json({message : "Students not found!"})
    }
    res.status(200).json(studentNames)
})

app.get("/nyiltnap/api/v1/tanora/:lessonName", (req, res) => {
    const lessonName = req.params.lessonName
    if(!lessonName){
        return res.status(400).json({message : "Invalid lesson name!"})
    }
    const lessons = db.getLessonByLessonName(lessonName)
    if(lessons.length == 0)
    {
        return res.status(404).json({message : "Lessons not found!"})
    }
    res.status(200).json(lessons)
})

app.get("/nyiltnap/api/v1/9-matematika-fizika", (req, res) => {
    const lessons = db.getLessonByYearAndTwoLessonNames("9%", "matematika", "fizika")
    if(lessons.length == 0)
    {
        return res.status(404).json({message : "Lessons not found!"})
    }
    res.status(200).json(lessons)
})

app.get("/nyiltnap/api/v1/telepulesfo", (req, res) => {
    const numbers = db.getNumberOfStudentsPerCity()
    if(numbers.length == 0)
    {
        return res.status(404).json({message : "Numbers not found!"})
    }
    res.status(200).json(numbers)
})

app.get("/nyiltnap/api/v1/tantargyak", (req, res) => {
    const subjects = db.getLessonNames()
    if(subjects.length == 0)
    {
        return res.status(404).json({message : "Subjects not found!"})
    }
    res.status(200).json(subjects)
})

app.get("/nyiltnap/api/v1/szabad", (req, res) => {
    db.updateSzabad()

    const subjects = db.getLessonsWithFreeSpace()
    if(subjects.length == 0)
    {
        return res.status(404).json({message : "Subjects not found!"})
    }
    res.status(200).json(subjects)
})

app.get("/nyiltnap/api/v1/telepulesrol/:studentName", (req, res) => {
    const studentName = req.params.studentName
    if(!studentName){
        return res.status(400).json({message : "Invalid student name!"})
    }
    const students = db.getStudentsByStudentName(studentName)
    if(students.length == 0)
    {
        return res.status(404).json({message : "Students not found!"})
    }
    res.status(200).json(students)
})

app.get("/nyiltnap/api/v1/tanar/:teacherName/:date", (req, res) => {
    const teacherName = req.params.teacherName
    let date = req.params.date
    if(!teacherName || !date){
        return res.status(400).json({message : "Invalid request!"})
    }

    if(date[4] == "-"){
        date = date.replace("-", ".")
    }

    const students = db.getStudentsByTeacherAndDate(date, teacherName)
    if(students.length == 0)
    {
        return res.status(404).json({message : "Students not found!"})
    }
    res.status(200).json(students)
})



app.listen(port, () => {
    console.log(`app running on ${port}.`)
})