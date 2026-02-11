import { Task } from "../models/models.js";
import { ValidationError, DatabaseError } from "sequelize";

// Helper functions
const sendErrorResponse = (res, status, message, errors = null) => {
  const response = { message };
  if (errors) response.errors = errors;
  return res.status(status).json(response);
};
const sanitizeString = (str) => {
  if (!str) return str;
  return String(str).trim().replace(/[<>]/g, "");
};

export const todoGetAll = async (req, res) => {
  try {
    const Tasks = await Task.findAll({
      order: [["createdAt", "DESC"]], //Added to be more consistent with the order
    });
    console.log(Tasks);
    const plainTasks = Tasks.map((task) => task.toJSON());
    res.json(plainTasks);
  } catch (error) {
    console.error("Get all tasks error:", error);

    //Database error handling added
    if (error instanceof DatabaseError) {
      return sendErrorResponse(
        res,
        400,
        "Database error",
        error.errors.map((err) => err.message),
      );
    }
    sendErrorResponse(res, 503, "Failed to get tasks");
  }
};

export const todoPost = async (req, res) => {
  try {
    const { content, description, completed } = req.body;
    //Input validation
    if (!content?.trim() || !description?.trim()) {
      return sendErrorResponse(
        res,
        400,
        "The content and the description are required, please insert both of them",
      );
    }
    if (content && description > 255) {
      return sendErrorResponse(
        res,
        400,
        "The content and the description must be less than 255 characters",
      );
    } else {
      const taskData = {
        content: sanitizeString(content.trim()),
        description: sanitizeString(description.trim()),
        isComplete: completed || false,
      };
      const newData = await Task.create(taskData);
      res.status(201).json({
        message: "Task created sucessfully",
        task: newData.toJSON(),
      });
    }
  } catch (error) {
    console.error("Create task error:", error);

    //Database error with a map for create a detailed report of the errors
    if (error instanceof ValidationError) {
      return sendErrorResponse(
        res,
        400,
        "Validation falied",
        error.errors.map((err) => err.message),
      );
    }
    sendErrorResponse(res, 503, "Failed to create task");
  }
};
export const todoGetById = async (req, res) => {
  try {
    //Getting the id
    const { id } = req.params;
    //Simple validation about id format
    if (!id || isNaN(parseInt(id))) {
      return sendErrorResponse(res, 400, "Invalid ID task format");
    }

    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json(task.toJSON());
  } catch (error) {
    console.error("Get task by ID error:", error);
    sendErrorResponse(res, 503, "Failed to retrieve task");
  }
};

export const todoPut = async (req, res) => {
  try {
    const { id } = req.params;
    const { content, description, completed } = req.body;
    if (!id || isNaN(parseInt(id))) {
      return sendErrorResponse(res, 400, "Invalid task format");
    }
    // Check if task exists
    const existingTask = await Task.findByPk(id);
    if (!existingTask) {
      return sendErrorResponse(res, 404, "Task not found");
    }
    const updateData = {};
    if (content !== undefined)
      updateData.content = sanitizeString(content.trim());
    if (description !== undefined)
      updateData.description = sanitizeString(description.trim());
    if (completed !== undefined) updateData.completed = completed;

    await Task.update(updateData, { where: { id } });
    const updatedTask = await Task.findByPk(id);

    res.status(200).json({
      message: "Task updated successfully",
      task: updatedTask.toJSON(),
    });
  } catch (error) {
    console.error("Update task error:", error);

    if (error instanceof ValidationError) {
      return sendErrorResponse(
        res,
        400,
        "Validation falied",
        error.errors.map((err) => err.message),
      );
    }
    sendErrorResponse(res, 503, "Failed to update task");
  }
};
export const todoDelete = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || isNaN(parseInt(id))) {
      return sendErrorResponse(res, 400, "Invalid task ID format");
    }

    const task = await Task.findByPk(id);
    if (!task) {
      return sendErrorResponse(res, 404, "Task not found");
    }

    await Task.destroy({ where: { id } });

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    console.error("Delete task error:", error);
    sendErrorResponse(res, 503, "Failed to delete task");
  }
};
export default {
  todoGetAll,
  todoPost,
  todoGetById,
  todoPut,
  todoDelete,
};
