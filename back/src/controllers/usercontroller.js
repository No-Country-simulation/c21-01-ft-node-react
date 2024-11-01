import { Op, where } from 'sequelize';
import { Transactions } from '../database/transactionsModel.js';
import { Users } from '../database/usersModel.js';
import { validateEmail } from '../Utilities/validations.js';
import bcrypt from 'bcrypt';


export const createUser = async (req, res) => { 
    console.log(req.body);

    try{
        const {Name, Email, Password} = req.body;
        
        const emailExists = await validateEmail(Email);
        if (emailExists) return res.status(400).send('Email already registered');

        const hashedPassword = await bcrypt.hash(Password, 8);

        const newUser = await Users.create({
            Name,
            Email,
            Password: hashedPassword
        });
    
        res.status(201).json({res: newUser, message: 'User successfully created'});
    } catch(err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
}

export const loginUser = async (req,res) => {

    try {

        const {Email ,Password } = req.body;

        if(!Email || !Password) {
            return res.status(400).send('All fields are required');
        }

        const users = await Users.findOne({
            where: { Email, },
            attributes: ['UserId','Email','Password', 'Name'],
        });

        const validEmail = await validateEmail(Email)

        if(!validEmail) return res.status(401).send('Incorrect Credentials');

        const isPasswordValid = await bcrypt.compare(String(Password),String(users.Password))

        if(isPasswordValid) {
            res.status(200).json({ message: 'Login Successfull', userId: users.UserId, nameUser: users.Name })
        } else {
            return res.status(401).send('Incorrect Credentials')
        }

    } catch (error) {
        return res.status(500).send('Server error', error)
    }
                
}

export const userDashboard = async (req,res) => {

    const userId = req.query.userId

    try {

        const userInformation = await Users.findOne({
            where: {
                UserId: userId
            }
        })

        if(!userInformation) return res.status(404).json({ message: 'Account not found' })

        const transactionType = await Transactions.findAll({
            where: {
                UserId : userInformation.UserId,
                TransactionType: {
                    [Op.in] : ['Ingreso','Egreso']
                },
            },
        })

        const expenses = transactionType.filter(t => t.TransactionType == 'Ingreso');
        const incomes = transactionType.filter(t => t.TransactionType == 'Egreso');

        const expensesAmount = expenses.reduce(                          
            (acc,t) => acc + parseInt(t.Amount), 0
        )

        const incomesAmount = incomes.reduce(
            (acc,t) => acc + parseInt(t.Amount), 0
        )

        const gains = Math.max(0, incomesAmount - expensesAmount);

        res.status(200).json([
            { gain: gains },
            { 
              expense: expenses.map(item => ({
                amount: parseFloat(item.Amount),  
                name: item.Description,
                date: new Date(item.Date).toISOString().split('T')[0]  
              }))
            },
            { 
              income: incomes.map(item => ({
                amount: parseFloat(item.Amount),  
                name: item.Description,
                date: new Date(item.Date).toISOString().split('T')[0]  
              }))
            }
          ]);
          
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err });
    }
}
