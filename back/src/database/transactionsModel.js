import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Transactions = sequelize.define("Transaction", {
    TransactionId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    TransactionType: {
        type: DataTypes.STRING
    },
    Description: {
        type: DataTypes.STRING
    },
    Amount: {
        type: DataTypes.DECIMAL
    },
    Date: {
        type: DataTypes.DATE
    }
},{
    timestamps: true
});
