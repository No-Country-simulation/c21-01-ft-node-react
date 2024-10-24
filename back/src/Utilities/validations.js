import { Users } from '../database/usersModel.js';

export const validateEmail = async (email) => {
    try{
        const user = await Users.findOne({
            where: {Email: email}
        });
        if(user === null) return false
        return true;
    } catch(err) {
        console.error('Error validating email: ', err);
        return false;
    }
}