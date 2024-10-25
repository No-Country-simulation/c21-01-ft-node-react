import { Users } from '../database/usersModel.js';
import { validateEmail } from '../Utilities/validations.js';
import bcypt from 'bcrypt';

export const createUser = async (req, res) => { 
    try{
        const {Name, Email, Password} = req.body;
        console.log("Name:", Name, "Email:", Email, "Password:", Password);
        const emailExists = await validateEmail(Email);
        if (emailExists) return res.status(400).send('Email already registered');

        const hashedPassword = await bcypt.hash(Password, 8);

        const newUser = await Users.create({
            Name,
            Email,
            Password: hashedPassword
        });
        console.log(newUser);
    
        res.status(201).json({res: newUser, message: 'User successfully created'});
    } catch(err) {
        console.error(err);
        res.status(500).json({ message: 'Server error', error: err });
    }
}