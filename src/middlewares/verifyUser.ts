import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'joi';
import { userSchema } from '../schema/user.joi';
import CreateError from '../utils/generateError';

const errorMap = (error: ValidationError) => {
  const { type } = error.details[0];
  switch (type) {
    case 'any.required':
      throw new CreateError(400, `${error.message}`);
    default:
      throw new CreateError(422, `${error.message}`);
  }
};

const verifyUser = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    errorMap(error);
  }
  next();
};

export default verifyUser;
