// import EmployeeMaster from "../models/employeeMaster.js"

// const getAllEmp = async (req, res) => {
//     try {
//         const allEmp = await EmployeeMaster.find();
//         res.status(200).json(allEmp);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

// const createEmp = async (req, res) => {
//     const emp = req.body;
//     const newEmp = new EmployeeMaster(emp);
//     try {
//         await newEmp.save();
//         res.status(201).json(newEmp);
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// }

// const updateEmployee = async (req, res) => {
//     const { id } = req.params;
//     const { name, employeeid, department, salary } = req.body;

//     try {
//         const updatedEmployee = await EmployeeMaster.findByIdAndUpdate(
//             id,
//             { name, employeeid, department, salary },
//             { new: true }
//         );

//         if (!updatedEmployee) {
//             return res.status(404).json({ message: "Employee not found" });
//         }

//         res.status(200).json(updatedEmployee);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };


// // export { getAllEmp, createEmp }
// export { updateEmployee}