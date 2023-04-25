import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'joi';
import productSchema from '../schema/product.joi';
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
      throw new CreateError(500, `${error.message}`);
  }
};

const verifyProduct = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { error } = productSchema.validate(req.body);
  if (error) {
    errorMap(error);
  }
  next();
};

export default verifyProduct;