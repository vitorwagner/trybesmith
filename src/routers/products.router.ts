import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import verifyProduct from '../middlewares/verifyProduct';

const router = Router();

const productsController = new ProductsController();

router.get('/', productsController.getAll);
router.post('/', verifyProduct, productsController.create);

export default router;
