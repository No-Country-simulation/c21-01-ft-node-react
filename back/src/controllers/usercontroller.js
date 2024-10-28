import { Op, where } from 'sequelize';
import { Transactions } from '../database/transactionsModel.js';
import { Users } from '../database/userModel.js';
import { validateEmail } from '../Utilities/validations.js';
import bcrypt from 'bcrypt';

export const createUser = async (req, res) => { 
    try{
        const {name, email, password} = req.body;
        
        const emailExists = await validateEmail(email);
        if (emailExists) return res.status(400).send('Email already registered');

        const newUser = await Users.create({
            name,
            email,
            password
        });
    
        res.status(201).json({res: newUser, message: 'User successfully created'});
    } catch(err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err });
    }
}

export const loginUser = async (req,res) => {
    try {
        const {email ,password } = req.body;

        if(!email || !password) {
            return res.status(400).send('All fields are required');
        }

        const users = await Users.findOne({
            where: { email, },
            attributes: ['Email'],
        });

        const validEmail = await validateEmail(email)

        if(validEmail) return res.status(400).send('Incorrect Credentials');

        const isPasswordValid = await bcrypt.compare(password,users.Password)

        if(isPasswordValid) {
            res.status(200).json({ message: 'Login Successful'})

        } else {
            return res.status(401).send('Incorrect Credentials')
        }
                
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: err });
    }
}

export const userDashboard = async (req,res) => {
    try {

        //Ingresar a la tabla transacciones, determinar que tipo es para retornar su valor.
        //Traemos el tipo y amount, luego separariamos en tres categorias, y a partir de eso debemos calcular el mount total por categoria
        const transactionType = await Transactions.findAll({
            where: {
                TransactionType: {
                    [Op.in] : ['Ingreso','Egreso','Cuenta']
                },
            },
        })

        const expenses = transactionType.filter(t => t.TransactionType == 'Ingreso');
        const incomes = transactionType.filter(t => t.TransactionType == 'Egreso');
        const account = transactionType.filter(t => t.TransactionType == 'Cuenta');

        const expensesAmount = expenses.reduce(                          
            (acc,t) => acc + t.Amount, 0
        )

        const incomesAmount = incomes.reduce(
            (acc,t) => acc + t.Amount, 0
        )

        const accountAmount = account.reduce(
            (acc,t) => acc + t.Amount, 0
        )

        const gains = incomesAmount - expensesAmount;

        res.status(200).json({gain: gains, expense: expensesAmount, income: incomesAmount})

    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
}
