import mongoose from "mongoose"

const EmployeeSchema = new mongoose.Schema({
    name: String,
    employeeid: String,
    department:String,
    salary : Number
})

const EmployeeModel = mongoose.model("EmployeeModel", EmployeeSchema)
// module.exports = EmployeeModel;
export default EmployeeModel;