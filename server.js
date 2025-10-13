import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";
import { sequelize, connectToDb } from "./db.js";

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded());
app.use("/api", todoRoutes);

app.listen(port, async () => {
  console.log(`Server started at port ${port}`);
  await connectToDb();
});
