import Controller from "../interfaces/Controller";
import {Request, Response} from 'express';

class UserController implements Controller {
  public static index = (req: Request, res: Response): Response => {
    const data = req.query.id;

    return res.send(`OK for ${data}`);
  }
  
  public static store = (req: Request, res: Response): Response => {
    return res.json({test: "success"})
  }
}

export default UserController;