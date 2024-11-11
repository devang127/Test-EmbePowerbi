import express from "express";
import { createNewEmployee, getAllEmployee } from "../controllers/employeeController.js";


const router = express.Router();

// GET all users
router.get('/', getAllEmployee);

// POST a new user
router.post('/', createNewEmployee);

// GET a specific user
// router.get('/:id', getUserById);

// PUT update a user
// router.put('/:id', updateUser);

// DELETE a user
// router.delete('/:id', deleteUser);

export default router;