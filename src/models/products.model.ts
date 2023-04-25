import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
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

  async getAll(): Promise<Product[]> {
    const [products] = await this.connection.execute<(Product & RowDataPacket)[]
    >('SELECT * FROM Trybesmith.products;');
    return products;
  }

  async create(product: Product): Promise<Product> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [product.name, product.amount],
    );

    return { id: insertId, ...product };
  }
}
