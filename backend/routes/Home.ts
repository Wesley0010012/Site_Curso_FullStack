import express, {Router} from 'express';
import HomeController from '../server/controllers/HomeController';

const HomeRouter: Router = express.Router();

HomeRouter.get('/', HomeController.index);

export default HomeRouter;