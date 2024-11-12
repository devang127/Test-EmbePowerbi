import express from "express"
import { getAllEmp, createEmp } from "../controllers/employeeMaster.js"

const router = express.Router()

// Get all employee
router.get("/", getAllEmp)

// Post a new employee
router.post("/", createEmp)

export default router;