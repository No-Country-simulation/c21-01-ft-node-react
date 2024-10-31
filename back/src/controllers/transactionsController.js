import { Transactions } from '../database/transactionsModel.js';
import { Users } from '../database/usersModel.js';
import { validateUser } from '../Utilities/validations.js';

export const newTransaction = async (req, res) => {
    try {
        const UserId = req.params.id;
        const { TransactionType, Description, Amount, Date } = req.body;

        const userExists = await validateUser(UserId);
        if (!userExists) return res.status(404).send('User not found');            

        const newTransaction = await Transactions.create({
            TransactionType,
            Description,
            Amount,
            Date,
            UserId
        });

        res.status(201).json({ res: newTransaction, message: 'Transaction successfully created' });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error });
    }
}