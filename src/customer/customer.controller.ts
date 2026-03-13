import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { customerDto } from './createCustomerDto/customerDto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getAllCustomer() {
    return this.customerService.getCustomer();
  }

  @Post()
  createCustomer(@Body() addCustomerDto: customerDto) {
    this.customerService.addCustomer(addCustomerDto);
  }
}
