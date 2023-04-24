import jwt from 'jsonwebtoken';
import { User } from '../models/users.model';

const jwtConfig: object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

declare const process : {
  env: {
    JWT_SECRET: string
  }
};

export function createToken(user: User) {
  return jwt.sign(
    {
      data: {
        username: user.username,
        vocation: user.vocation,
        level: user.level,
      },
    },
    process.env.JWT_SECRET,
    jwtConfig,
  );
}

export function validateToken(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET, jwtConfig);
}
