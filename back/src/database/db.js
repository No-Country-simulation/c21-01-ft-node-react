import Sequelize from 'sequelize';

export const sequelize = new Sequelize({
    database: process.env.PG_DATABASE,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: 'postgres'
});

export const initDB = async () => {
    try {
        await sequelize.sync({ force: false, alter: true });  
        console.log("Database synchronized");
    } catch (error) {
        console.error("Error synchronizing database: ", error);
    }
}