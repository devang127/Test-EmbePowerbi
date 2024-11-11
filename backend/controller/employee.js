import employee from '../models/employee'

const getAllEmployee = async (req, res) => {
    try {
        const employees = await employee.find()
        res.status(200).json(employees)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export { getAllEmployee }