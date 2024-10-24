import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { Accounts } from "./accountsModel.js";

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

Users.hasOne(Accounts, {foreignKey: 'UserId', sourceKey: 'UserId'});

Accounts.belongsTo(Users, {foreignKey: 'UserId', targetKey: 'UserId'});