import { Sequelize } from "sequelize";
import { config } from "dotenv";

export const sequelize = new Sequelize("extask", "root", "", {
  dialect: "mysql",
  host: process.env.HOST,
});

export const connectToDb = async () => {
  try {
    await sequelize.authenticate(console.log("Succesfuly conected to our DB"));
  } catch (error) {
    console.error(error);
  }
};

export default {
  sequelize,
  connectToDb,
};

//execute sequelize.sync() to connect with the database
