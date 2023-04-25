import OrderModel, { Order } from '../models/orders.model';

class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  async getAll(): Promise<Order[]> {
    return this.model.getAll();
  }

  async create(userId: number, productsIds: number[]): Promise<Order> {
    const newOrder = await this.model.create(userId);
    await Promise.all(productsIds.map((productId) => 
      this.model.update(newOrder.id as number, productId)));

    return newOrder;
  }
}

export default OrderService;