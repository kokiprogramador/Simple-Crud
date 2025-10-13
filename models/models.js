import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Task = sequelize.define("Task", {
  content: {
    type: DataTypes.STRING,
    validate: {
      max: 150,
    },
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export default {
  Task,
};
