import express from "express";
import { sequelize, initDB } from "./database/db.js";
import "./database/usersModel.js";
import "./database/transactionsModel.js";
import cors from "cors";
import usersRouter from "./routes/usersroutes.js";
import transactionRouter from "./routes/transactionRoutes.js";

const app = express();
app.use(express.json());
app.use(cors("*"));

const port = process.env.PORT || 3000;

await initDB();

app.use(usersRouter);
app.use(transactionRouter);

app.listen(port, () => {
  console.log("Server running");
});
