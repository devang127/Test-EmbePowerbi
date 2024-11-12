import mongoose from "mongoose";

const employeeMasterSchema = new mongoose.Schema({
    name: String,
    employeeid: String,
    department:String,
    salary : Number
})

const EmployeMaster = mongoose.model(
    'EmployeeMaster',
    employeeMasterSchema
)

export default EmployeMaster;