import { Request, Response } from 'express';
import ProductService from '../services/products.service';

class ProductsController {
  productService: ProductService;

  constructor(productService = new ProductService()) {
    this.productService = productService;
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const products = await this.productService.getAll();

    res.status(200).json(products);
  }

  async create(req: Request, res: Response): Promise<void> {
    const product = await this.productService.create(req.body);

    res.status(201).json(product);
  }
}

export default ProductsController;
