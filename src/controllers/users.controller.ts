import { Request, Response } from 'express';
import UserService from '../services/users.service';
import { createToken } from '../utils/jwt.utils';

class UsersController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const user = await this.userService.create(req.body);
    const token = createToken(user);

    res.status(201).json({ token });
  }
}

export default UsersController;
