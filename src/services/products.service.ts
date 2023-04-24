import ProductModel, { Product } from '../models/products.model';

class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  async getAll(): Promise<Product[]> {
    return this.model.getAll();
  }

  async create(product: Product): Promise<Product> {
    return this.model.create(product);
  }
}

export default ProductService;