import Router from 'express';
import { newTransaction } from '../controllers/transactionsController.js';

const router = Router();

router.post('/dashboard/:id', newTransaction);

export default router;