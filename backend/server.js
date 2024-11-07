
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import EmployeeModel from "./models/employee.js"

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/test')

app.post('/register',(req, res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001,() =>{
    console.log("Server is running")
})