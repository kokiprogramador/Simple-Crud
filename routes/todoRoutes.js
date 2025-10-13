import { Router } from "express";
import todoControllers from "../controllers/todoControllers.js";

const router = Router();

router.get("/tasks", todoControllers.todoGetAll);
router.post("/createTask", todoControllers.todoPost);
router.get("/getTask/:id", todoControllers.todoGetById);

export default router;
