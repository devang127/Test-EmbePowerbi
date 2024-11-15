import mongoose from "mongoose";

const employeeMasterSchema = new mongoose.Schema({
    name: String,
    employeeid: String,
    department:String,
    salary : Number
})

const EmployeMaster = mongoose.model(
    'Employee',
    employeeMasterSchema
)

export default EmployeMaster;