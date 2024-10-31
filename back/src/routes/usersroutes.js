import Router from 'express';
import { createUser, loginUser, userDashboard } from '../controllers/usercontroller.js';

const router = Router();

router.post('/users/register', createUser);

router.post('/users/login', loginUser)

router.get('/users/dashboard', userDashboard) //Buscaria una usuario con su respectivo dashboard

export default router;