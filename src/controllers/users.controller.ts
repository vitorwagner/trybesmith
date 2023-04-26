import { Request, Response } from 'express';
import UserService from '../services/users.service';
import { createToken } from '../utils/jwt.utils';

class UsersController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
    this.create = this.create.bind(this);
    this.login = this.login.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const user = await this.userService.create(req.body);
    const token = createToken(user);

    res.status(201).json({ token });
  }
  
  async login(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    const token = await this.userService.login(username, password);
    res.status(200).json({ token });
  }
}

export default UsersController;
