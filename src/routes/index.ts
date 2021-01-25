import { Router } from 'express';
<<<<<<< HEAD
import appoitmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appoitmentsRouter);
=======
import transactionRouter from './transaction.routes';

const routes = Router();

routes.use('/transactions', transactionRouter);
>>>>>>> 4842b80e13e31d25dd3ab363580984b34c38e635

export default routes;
