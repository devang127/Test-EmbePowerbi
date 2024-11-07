
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import EmployeeModel from "./models/employee.js"

const app = express()
app.use(express.json())
app.use(cors())



mongoose.connect(process.env.MONGODB_URI)

app.post('/register',(req, res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

const PORT = process.env.PORT || 8000;

app.listen(PORT,() =>{
    console.log("Server is running")
})