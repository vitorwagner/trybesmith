import UserModel, { User } from '../models/users.model';
import CreateError from '../utils/generateError';
import { createToken } from '../utils/jwt.utils';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  async create(user: User): Promise<User> {
    return this.model.create(user);
  }

  async login(username: string, password: string): Promise<string> {
    const userLogin = await this.model.login(username);

    if (!userLogin || password !== userLogin.password) {
      throw new CreateError(401, 'Username or password invalid');
    }

    const token = createToken(userLogin);

    return token;
  }
}

export default UserService;
