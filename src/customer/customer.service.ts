import { Injectable } from '@nestjs/common';
import { customerInterface } from './interfaces/customerInterface';
import { customerDto } from './createCustomerDto/customerDto';

@Injectable()
export class CustomerService {
  private Customers: customerInterface[] = [];

  getCustomer(): customerInterface[] {
    return this.Customers;
  }
  //  here out Dto acts like a security checker
  addCustomer(addCustomerDto: customerDto): customerInterface {
    const newCustomer: customerInterface = {
      id: Date.now(),
      ...addCustomerDto,
    };
    this.Customers.push(newCustomer);
    return newCustomer;
  }


}
