import express from 'express';
import 'express-async-errors';
import router from './routers/index';
import handleErrorMiddlewares from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use(router);
app.use(handleErrorMiddlewares);

export default app;
