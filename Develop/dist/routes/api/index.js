import { userRoutes } from './userRoutes.js';
import { thoughtRoutes } from './thoughtRoutes.js';
import { Router } from 'express';
const router = Router();
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
export default router;