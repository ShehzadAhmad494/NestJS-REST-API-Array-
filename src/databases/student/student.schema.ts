import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PreDeleteOneMiddlewareFunction } from 'mongoose';
import { Document } from 'mongoose';


// we merge both Student(It gives us the properties) and Document(it gives us the methods ----> -id,save,delete) to create a new type called StudentDocument
export type StudentDocument = Student & Document;

@Schema({ timestamps: true })
export class Student {
  @Prop({ required: true })
  name: string;

  @Prop()
  email?: string;

 @Prop({ required: true })
  password: string;
}


// convert the Student class into a mongoose schema and export it as StudentSchema
// Schema class fields se banta hai.
export const StudentSchema = SchemaFactory.createForClass(Student);

// Class = Schema blueprint
// @Prop = Database field
// SchemaFactory = Create mongoose schema