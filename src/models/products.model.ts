import { Pool, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';

export interface Product {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export default class ProductModel {
  connection: Pool;

  constructor() {
    this.connection = connection;
  }

  async create(product: Product): Promise<Product> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [product.name, product.amount],
    );

    return { id: insertId, ...product };
  }
}