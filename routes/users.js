import express from 'express';
import { getUser, getUserFriends, addRemoveFriends } from '../controllers/users';
import { verifyToken } from '../middleware/auth';

const router = express.Router();

/* Read */
router.get('/:id', verifyToken, getUser);
router.get('/:id/friends', verifyToken, getUserFriends);

/* Update */
router.patch('/:id/:friendId', verifyToken, addRemoveFriends);

export default router;