import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import type { Product } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productServiceInstance: ProductService) {}

  @Get()
  getAllProducts() {
    return this.productServiceInstance.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productServiceInstance.getProductById(Number(id));
  }

  @Post()
  createProduct(@Body() data: Product) {
    return this.productServiceInstance.createProduct(data);
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() data: Product) {
    return this.productServiceInstance.updateProduct(Number(id), data);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productServiceInstance.deleteProduct(Number(id));
  }
}