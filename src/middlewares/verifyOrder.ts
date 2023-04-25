import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'joi';
import orderSchema from '../schema/order.joi';
import CreateError from '../utils/generateError';

const errorMap = (error: ValidationError) => {
  const { type } = error.details[0];
  switch (type) {
    case 'string.min':
      throw new CreateError(422, `${error.message}`);
    case 'any.required':
      throw new CreateError(400, `${error.message}`);
    case 'string.base':
      throw new CreateError(422, `${error.message}`);
    default:
      throw new CreateError(422, `${error.message}`);
  }
};

const verifyOrder = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { error } = orderSchema.validate(req.body);
  if (error) {
    errorMap(error);
  }
  next();
};

export default verifyOrder;