import { Router } from 'express';
import {
  getAllUser,
  getUserById,
  createUser,
  removeUser,
  addFriend,
  removeFriend,
  getUserThoughts
} from '../../controllers/userController.js';

const router = Router();


// /api/users
router.route('/')
.get(getAllUser)
.post(createUser);

router.get('/:userId/thoughts', getUserThoughts);
// /api/users/:userId
router.route('/:userId')
  .get(getUserById)
  .delete(removeUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

export { router as userRoutes };

export default router;