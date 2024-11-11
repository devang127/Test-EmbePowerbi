
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import EmployeeModel from "./models/employee.js"
require('dotenv').config();

const app = express()
app.use(express.json())
app.use(cors())



mongoose.connect(process.env.MONGODB_URI)

app.post('/register',(req, res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.get('/employees', (req, res) => {
    EmployeeModel.find() // Find all employees in the database
        .then(employees => res.status(200).json(employees)) // Respond with the list of employees
        .catch(err => res.status(500).json({ error: err.message })); // Handle errors
});
const PORT = process.env.PORT || 8000;

app.listen(PORT,() =>{
    console.log("Server is running")
})

