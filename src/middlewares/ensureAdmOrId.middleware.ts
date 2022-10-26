import { Request, Response, NextFunction } from "express";

const ensureAdmOrIdMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.isAdm === true || req.user.id === req.params.id) {
    return next();
  }
  return res.status(403).json({ message: "is not adm" });
};

export default ensureAdmOrIdMiddleware;
