import express from 'express';

import productsRouter from './products.router';

const router = express.Router();
// import ordersRouter from './orders.router';
// import usersRouter from './users.router';
// import loginRouter from './login.router';

router.use('/products', productsRouter);
// router.use('/orders', ordersRouter);
// router.use('/users', usersRouter);
// router.use('/login', loginRouter);

export default router;