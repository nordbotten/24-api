import { NextFunction, Request } from "express";

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  // TODO: Implement isAdmin middleware
  return next();
};

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  // TODO: Implement isAuthenticated middleware
  return next();
};

export { isAdmin, isAuthenticated };
