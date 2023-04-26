import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';

export interface User {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export default class UserModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async create(user: User): Promise<User> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [user.username, user.vocation, user.level, user.password],
    );

    return { id: insertId, ...user };
  }

  async login(username: string): Promise<User | undefined> {
    const [[userLogin]] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.users WHERE username = ?',
      [username],
    );

    return userLogin as User | undefined;
  }
}