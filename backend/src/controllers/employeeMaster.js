import EmployeeMaster from "../models/employeeMaster.js"

const getAllEmp = async (req, res) => {
    try {
        const allEmp = await EmployeeMaster.find();
        res.status(200).json(allEmp);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createEmp = async (req, res) => {
    const emp = req.body;
    const newEmp = new EmployeeMaster(emp);
    try {
        await newEmp.save();
        res.status(201).json(newEmp);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export { getAllEmp, createEmp }