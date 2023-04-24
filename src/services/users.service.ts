import UserModel, { User } from '../models/users.model';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  async create(user: User): Promise<User> {
    return this.model.create(user);
  }
}

export default UserService;