import OrderModel, { Order } from '../models/orders.model';

class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  async getAll(): Promise<Order[]> {
    return this.model.getAll();
  }
}

export default OrderService;