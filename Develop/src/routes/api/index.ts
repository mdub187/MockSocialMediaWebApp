import { Router } from 'express';
import { userRoutes } from './userRoutes.js';
import { ThoughtsRouter } from './thoughtsRoutes.js';

const router = Router();

router.use('/user', userRoutes);
router.use('/thoughts', ThoughtsRouter);

export default router;
