import express, {Router} from 'express';
import HomeRouter from './Home';

const router: Router = express.Router();

router.use(HomeRouter);


export default router;