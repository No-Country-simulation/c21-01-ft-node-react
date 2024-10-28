import express from 'express';
import { sequelize, initDB } from "./database/db.js";
import "./database/usersModel.js";
import "./database/accountsModel.js";
import "./database/transactionsModel.js";
const app = express();

const port = process.env.PORT || 3000;

await initDB();

app.listen(port, () => {
  console.log('Server running on port 3000');
});
