import { Task } from "../models/models.js";

export const todoGetAll = async (req, res) => {
  try {
    const Tasks = await Task.findAll();
    console.log(Tasks);
    const plainTasks = Tasks.map((task) => task.toJSON());
    res.json(plainTasks);
  } catch {
    res
      .status(500)
      .json({ message: "Internal server error, look at the code." });
  }
};

export const todoPost = async (req, res) => {
  const data = {
    content: req.body.content,
    description: req.body.description,
    isComplete: req.body.completed ? req.body.completed : false,
  };
  console.log(data);
  try {
    if (!req.body.content || !req.body.description) {
      res.json({ message: "Please, introduce all the requested data" });
    } else {
      await Task.create(data);
      res.status(200).json({ message: `Data delivered sucessfully` });
    }
  } catch {
    res.status(400).json({
      message: "Internal server error, please contact customer service",
    });
  }
};
export const todoGetById = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    res.json(task);
  } catch {
    res.status(500).json({
      message: "Internal server error, please contact customer service",
    });
  }
};

export const todoPut = (req, res) => {};

export const todoDelete = (req, res) => {};

export default {
  todoGetAll,
  todoPost,
  todoGetById,
  todoPut,
  todoDelete,
};
