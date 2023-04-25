import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import verifyLogin from '../middlewares/verifyLogin';

const router = Router();

const usersController = new UsersController();

router.post('/', verifyLogin, usersController.login);

export default router;