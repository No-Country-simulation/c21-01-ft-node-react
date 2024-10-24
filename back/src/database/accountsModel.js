import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { Transactions } from "./transactionsModel.js";

export const Accounts = sequelize.define("Account", {
    AccountId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING
    }
},{
    timestamps: false
});

Accounts.hasMany(Transactions, {foreignKey: 'AccountId', sourceKey: 'AccountId'});

Transactions.belongsTo(Accounts, {foreignKey: 'AccountId', targetKey: 'AccountId'});
