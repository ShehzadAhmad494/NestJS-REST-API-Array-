import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { CustomerModule } from './customer/customer.module';
import { UppercaseController } from './uppercase/uppercase.controller';
import { UserRoleController } from './user-role/user-role.controller';
import { ExceptionController } from './exception/exception.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './databases/student/student.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL!),
    StudentModule,
    EmployeeModule
  ],
  controllers: [
    AppController,
    UsersController,
    ProductController,
    UppercaseController,
    UserRoleController,
    ExceptionController
  ],
  providers: [AppService, ProductService],
})
export class AppModule {}