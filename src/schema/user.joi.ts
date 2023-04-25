import Joi from 'joi';

export const loginSchema = Joi.object({
  username: Joi.string().required().min(3).label('username'),
  password: Joi.string().required().min(3).label('password'),
});

export const userSchema = Joi.object({
  username: Joi.string().required().min(3).label('username'),
  password: Joi.string().required().min(8).label('password'),
  level: Joi.number().required().min(1).label('level'),
  vocation: Joi.string().required().min(3).label('vocation'),
});