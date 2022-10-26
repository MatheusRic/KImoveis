import { Request, Response, NextFunction } from "express";

const ensureIsAdmMiddlewares = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.isAdm === true) {
    return next();
  }
  return res.status(403).json({ message: "is not adm" });
};

export default ensureIsAdmMiddlewares;
