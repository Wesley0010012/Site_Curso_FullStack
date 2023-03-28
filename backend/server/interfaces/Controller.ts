import { Response, Request } from "express";

abstract class Controller {
  static index: (req: Request, res: Response) => Response
}

export default Controller;