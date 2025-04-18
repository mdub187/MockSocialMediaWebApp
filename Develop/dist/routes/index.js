import express from 'express';
import userRoutes  from './routes/api/userRoutes.js';
import thoughtRoutes from './routes/api/thoughtRoutes.js';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

export default router;