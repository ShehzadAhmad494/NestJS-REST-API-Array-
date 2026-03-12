import { Module } from '@nestjs/common';
import { Student, StudentSchema } from './student.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';

@Module({
  imports: [
    // this is the regisqtration of the schema in Mongoo
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  providers: [StudentService],
  controllers: [StudentController],
})
export class StudentModule {}
