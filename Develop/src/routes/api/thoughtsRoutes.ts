import { Router } from 'express';
const router = Router();
import {
  // getAllThoughts,
  getThoughtById,
  // createThought,
  updateThought,
  deleteThought,
  // addReaction,
  // removeReaction,
} from '../../controllers/thoughtsController.js';

// /api/Thoughts
// router.route('/').get(getAllThoughts.put(createThought));

// /api/Thoughts/:ThoughtsId
router
  .route('/:ThoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// router.route('/:ThoughtsId/reactions').post(addReaction);

// router.route('/:ThoughtsId/reactions/:reactionId').delete(removeReaction);



export { router as ThoughtsRouter };
