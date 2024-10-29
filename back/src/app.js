import express from 'express';
import { sequelize, initDB } from "./database/db.js";
import "./database/usersModel.js";
import "./database/transactionsModel.js";
import usersRouter from "./routes/usersroutes.js";
import transactionsRouter from "./routes/transactionRoutes.js";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

await initDB();

app.use(usersRouter);
app.use(transactionsRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Budget Tracker API');
});

app.listen(port, () => {
  console.log('Server running on port 3000');
});
