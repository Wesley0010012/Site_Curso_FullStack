import express, {Router} from 'express';
import HomeRouter from './Home';
import UserRouter from './User';

const router: Router = express.Router();

router.use('/', HomeRouter);
router.use('/user', UserRouter);


export default router;
