import { Injectable, NotFoundException } from '@nestjs/common';

export interface Product {
  id: number;
  product_name: string;
  price: number;
}

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, product_name: 'Mobile', price: 40000 },
    { id: 2, product_name: 'Mouse', price: 400 },
    { id: 3, product_name: 'Tablet', price: 50000 },
    { id: 4, product_name: 'Laptop', price: 60000 },
  ];

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {
    const productFetching = this.products.find((product) => product.id === id);
    if (!productFetching) throw new NotFoundException('Product is not Found!');
    return productFetching;
  }

  // POST
  createProduct(data: Omit<Product, 'id'>) {
    const newProduct: Product = {
      id: Date.now(),
      ...data,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  // PUT
  updateProduct(id: number, data: Product) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) throw new NotFoundException('Product is not Found!');

    this.products[index] = {
      ...this.products[index],
      ...data,
    };

    return this.products[index];
  }

  // DELETE
  deleteProduct(id: number) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) throw new NotFoundException('Product is not Found!');

    const deletedProduct = this.products[index];
    this.products.splice(index, 1);
    return deletedProduct;
  }
}