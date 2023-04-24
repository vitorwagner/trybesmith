import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

class OrdersController {
  ordersService: OrderService;

  constructor(ordersService = new OrderService()) {
    this.ordersService = ordersService;
    this.getAll = this.getAll.bind(this);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const orders = await this.ordersService.getAll();

    res.status(200).json(orders);
  }
}

export default OrdersController;