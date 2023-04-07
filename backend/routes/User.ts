import express, {Router, Request, Response} from 'express';
import UserController from '../server/controllers/UserController';

const UserRouter: Router = express.Router();

UserRouter.post('/create', UserController.store);

export default UserRouter;