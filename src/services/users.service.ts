import UserModel, { User } from '../models/users.model';
import CreateError from '../utils/generateError';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  async create(user: User): Promise<User> {
    return this.model.create(user);
  }

  async login(username: string, password: string): Promise<User> {
    const userLogin = await this.model.login(username, password);

    if (!userLogin || password !== userLogin.password) {
      throw new CreateError(401, 'Username or password invalid');
    }

    return userLogin;
  }
}

export default UserService;