import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import verifyUser from '../middlewares/verifyUser';

const router = Router();

const usersController = new UsersController();

router.post('/', verifyUser, usersController.create);

export default router;