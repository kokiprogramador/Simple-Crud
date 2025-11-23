import { Task } from "../models/models.js";
import { ValidationError, DatabaseError } from "sequelize";

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
      return res.status(503).json({
        message: "Server temporaly unavailable",
      });
    }
    //This is a env aware error.
    res.status(500).json({
      message: "Failed to retrieve tasks",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

export const todoPost = async (req, res) => {
  try {
    const data = {
      content: req.body.content,
      description: req.body.description,
      isComplete: req.body.completed ? req.body.completed : false,
    };
    //Input validation
    if (!req.body.content || !req.body.description) {
      res.status(400).json({
        message: "Content and description are required and cannot be empty",
      });
    }
    if (data.content.length > 255) {
      res.status(400).json({
        message: "Content must be less than 255 characters",
      });
    } else {
      const taskData = data;
      await Task.create(taskData);
      res.status(201).json({
        message: "Task created sucessfully",
        task: taskData,
      });
    }
  } catch (error) {
    console.error("Create task error:", error);

    //Database error with a map for create a detailed report of the errors
    if (error instanceof ValidationError) {
      return res.status(400).json({
        message: "Validation failed",
        errors: error.errors.map((err) => err.message),
      });
    }
    //This is a env aware error.
    res.status(500).json({
      message: "Failed to retrieve tasks",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
export const todoGetById = async (req, res) => {
  try {
    //Getting the id
    const { id } = req.params;
    //Simple validation about id ofrmat
    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({
        message: "Invalid task ID format",
      });
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
    res.status(500).json({
      message: "Failed to retrieve task",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

export const todoPut = async (req, res) => {
  try {
    const data = {
      content: req.body.content,
      description: req.body.description,
      isComplete: req.body.isComplete,
      id: req.params.id,
    };
    //Simple validation about id format
    if (!data.id || isNaN(parseInt(data.id))) {
      return res.status(400).json({
        message: "Invalid task ID format",
      });
    }
    // Check if task exists
    const existingTask = await Task.findByPk(data.id);
    if (!existingTask) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    if (data) {
      await Task.update(
        {
          content: data.content,
          description: data.description,
          isComplete: data.isComplete,
        },
        {
          where: {
            id: data.id,
          },
        },
        res.status(200).json(data),
      );
    }
  } catch (error) {
    console.error("Update task error:", error);

    if (error instanceof ValidationError) {
      return res.status(400).json({
        message: "Validation failed",
        errors: error.errors.map((err) => err.message),
      });
    }

    res.status(500).json({
      message: "Failed to update task",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

export const todoDelete = async (req, res) => {
  try {
    const { id } = req.params.id;
    if (id) {
      await Task.destroy({
        where: {
          id: id,
        },
      });
    }
    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    console.error("Delete task error:", error);
    res.status(500).json({
      message: "Failed to delete task",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

export default {
  todoGetAll,
  todoPost,
  todoGetById,
  todoPut,
  todoDelete,
};
