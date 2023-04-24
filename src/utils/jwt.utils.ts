import jwt, { SignOptions, Secret } from 'jsonwebtoken';
import { User } from '../models/users.model';

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret: Secret = process.env.JWT_SECRET || 'yourSecret';

export function createToken(user: User) {
  return jwt.sign(
    {
      data: {
        username: user.username,
        vocation: user.vocation,
        level: user.level,
      },
    },
    secret,
    jwtConfig,
  );
}

export function validateToken(token: string) {
  return jwt.verify(token, secret, jwtConfig);
}
