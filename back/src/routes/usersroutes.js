import Router from 'express';
import { createUser, loginUser, userDashboard } from '../controllers/usercontroller.js';

const router = Router();

router.post('/users/register', createUser);

router.get('/login', loginUser)

router.get('/users/dashboard/:id', userDashboard) //Buscaria una usuario con su respectivo dashboard

export default router;