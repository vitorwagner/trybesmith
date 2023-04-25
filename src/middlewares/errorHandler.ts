import { NextFunction, Request, Response } from 'express';

export type Error = {
  status: number;
  message: string;
};

const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { status, message } = error;
  return res.status(status || 500).json({ message });
};

export default errorHandler;