import { Request, Response } from 'express';
import Controller from '../interfaces/Controller';


class HomeController implements Controller {
  public static index = (req: Request, res: Response): Response => {
    const data = req.query.id;

    return res.send(`OK for ${data}`);
  }
}

export default HomeController;