import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize({
  database: process.env.PG_DATABASE,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT ?? 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

export const initDB = async () => {
  try {
    await sequelize.sync({ force: false, alter: true });
    console.log("Database synchronized");
  } catch (error) {
    console.error("Error synchronizing database: ", error);
  }
};
