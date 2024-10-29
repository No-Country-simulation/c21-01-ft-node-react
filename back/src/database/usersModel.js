import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { Transactions } from "./transactionsModel.js";

export const Users = sequelize.define("User", {
    UserId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING
    },
    Email: {
        type: DataTypes.STRING
    },
    Password: {
        type: DataTypes.STRING
    }
},{
    timestamps: false
});

Users.hasMany(Transactions, {foreignKey: 'UserId', sourceKey: 'UserId'});

Transactions.belongsTo(Users, {foreignKey: 'UserId', targetKey: 'UserId'});