import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import verifyLogin from '../middlewares/verifyLogin';
// import { handleAsyncError } from '../middlewares/errorHandler';

const router = Router();

const usersController = new UsersController();

router.post('/', verifyLogin, usersController.login);
// router.post('/', verifyLogin, handleAsyncError(usersController.login));

export default router;