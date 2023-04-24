import { Pool, RowDataPacket } from 'mysql2/promise';
import connection from './connection';

export interface Order {
  id?: number;
  userId: number;
}

export default class OrderModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async getAll(): Promise<Order[]> {
    const [orders] = await this.connection.execute<(Order & RowDataPacket)[]>(
      `SELECT o.id, o.user_id AS userId, 
      JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.orders AS o
      JOIN Trybesmith.products AS p ON p.order_id = o.id
      GROUP BY o.id`);
    return orders;
  }
}