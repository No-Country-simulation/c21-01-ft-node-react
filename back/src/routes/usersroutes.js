import Router from 'express';
import { createUser } from '../controllers/usercontroller.js';

const router = Router();

router.post('/users/register', createUser);

export default router;