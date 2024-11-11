
import EmployeeModel from '../models/employeeModel.js'

const getAllEmployee = async (req, res) => {
    try {
        const employees = await EmployeeModel.find()
        res.status(200).json(employees)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createNewEmployee = async (req, res) => {
    const employee = new employee(req.body)
    try {
        const newEmployee = await employee.save();
        res.status(201).json({ message: "Data is posted to MongoDB!", newEmployee });
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
}

export  { getAllEmployee, createNewEmployee }