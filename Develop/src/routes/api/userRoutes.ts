import { Router } from 'express';
const router = Router();
import {
  getAllUser,
  // getUserById,
  addUser,
  // removeUser,
  // addFriends,
  removeFriends,

} from '../../controllers/userController.js';

// /api/students
router.route('/').get(getAllUser).post(addUser);

// /api/students/:studentId
// router.route('/:UserId').get(getUserById).delete(removeUser);

// /api/students/:studentId/assignments
router.route('/:UserId/friends/:friendsId').post(addUser);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:UserId/friends/:friendsId').delete(removeFriends);

export { router as userRoutes} ;
