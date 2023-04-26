import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

class OrdersController {
  ordersService: OrderService;

  constructor(ordersService = new OrderService()) {
    this.ordersService = ordersService;
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const orders = await this.ordersService.getAll();

    res.status(200).json(orders);
  }

  async create(req: Request, res: Response): Promise<void> {
    const order = await this.ordersService.create(res.locals.user.id, req.body.productsIds);

    res.status(201).json({ userId: order.userId, productsIds: req.body.productsIds });
  }
}

export default OrdersController;