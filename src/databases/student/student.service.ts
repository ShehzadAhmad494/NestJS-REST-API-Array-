import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './student.schema';

@Injectable()
export class StudentService {

  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>
  ) {}

  async createStudent(data: Partial<Student>): Promise<Student> {
    const newStudents = new this.studentModel(data);
    return newStudents.save();
  }

  // create many students
  // big challenge is 
  // mongodb document return krta hai jo create hua hai but agar hum insertMany use krte hai to wo document return nhi krta balki ek array of documents return krta hai jo create hua hai
  async createManyStudents(data: Partial<Student>[]): Promise<StudentDocument[]> {
  return this.studentModel.insertMany(data, { ordered: false });
}

  // get all students
  async getAllStudents(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  // get student by id
  // here null is important may be client want to get the student that is not stored in the database
  async getStudentById(id: string): Promise<Student | null> {
    return this.studentModel.findById(id).exec();
}

  // update data with Put Method

  async UpdateStudent(id: string, data: Partial<Student>): Promise<Student | null> {
    return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  // delete student by id
  async deleteStudent(id: string): Promise<Student | null> {
    return this.studentModel.findByIdAndDelete(id).exec();
  }
}