import express from 'express';
import { sequelize, initDB } from "./database/db.js";
import "./database/usersModel.js";
import "./database/transactionsModel.js";
import router from "./routes/usersroutes.js";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

await initDB();

app.use(router);

app.get('/', (req,res) => {
  res.json('Hello world')
})

app.listen(port, () => {
  console.log('Server running on port 3000');
});
