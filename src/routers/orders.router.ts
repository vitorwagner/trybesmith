import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import tokenValidation from '../middlewares/tokenValidation';
import verifyOrder from '../middlewares/verifyOrder';

const router = Router();

const ordersController = new OrdersController();

router.get('/', ordersController.getAll);
router.post('/', tokenValidation, verifyOrder, ordersController.create);

export default router;