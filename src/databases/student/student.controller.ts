import { Body, Controller, Post } from '@nestjs/common';
// import { StudentService } from './student.service';
import { Student } from './student.schema';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService){}
    @Post()
    async addStudents(@Body() data: Partial<Student>){
        return this.studentService.createStudent(data);
    }
}
