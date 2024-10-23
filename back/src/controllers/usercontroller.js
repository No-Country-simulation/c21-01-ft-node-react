import { Users } from '../database/userModel.js';
import { validateEmail } from '../Utilities/validations.js';

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