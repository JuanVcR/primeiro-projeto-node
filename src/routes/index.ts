import { Router } from 'express';
import appoitmentsRouter from './appointments.routes';
import transactionRouter from './transaction.routes';

const routes = Router();

routes.use('/appointments', appoitmentsRouter);

routes.use('/transactions', transactionRouter);


export default routes;
