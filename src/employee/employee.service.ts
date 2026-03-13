import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schema/employee.schema';
import { Profile } from './schema/profile.schema';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<Employee>,
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  // here is the logic for the creation of the employee and profile

  async createEmployee(): Promise<Employee> {
    const profile = await new this.profileModel({
      age: 43,
      salary: 4500,
      qualification: 'BS',
    }).save();

    const employee = new this.employeeModel({
      name: 'Ali Ahmad',
      profile: profile._id,
    });
    return employee.save();
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().populate('profile').exec();
  }
}
