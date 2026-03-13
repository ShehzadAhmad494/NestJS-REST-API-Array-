import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
// import { StudentService } from './student.service';
import { Student } from './student.schema';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async addStudents(@Body() data: Partial<Student>) {
    return this.studentService.createStudent(data);
  }

  // create many students
  @Post('bulk') // route: /students/bulk
  async createMultiple(@Body() data: Partial<Student>[]) {
    return this.studentService.createManyStudents(data);
  }
  // get all students

  @Get()
  async getStudents() {
    return this.studentService.getAllStudents();
  }

  // get student by Id
  @Get(':id')
  async getStudentwithId(@Param('id') id: string) {
    return this.studentService.getStudentById(id);
  }

  @Put(':id')
  async updaateStudent(
    @Param('id') id: string,
    @Body() data: Partial<Student>,
  ) {
    return this.studentService.UpdateStudent(id, data);
  }

  //
  @Delete(':id')
  async deleteStudent(@Param('id') id: string) {
    return this.studentService.deleteStudent(id);
  }
}
