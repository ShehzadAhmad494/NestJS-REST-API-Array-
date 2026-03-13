/* eslint-disable prettier/prettier */
// import { isInt, isString } from 'class-validator';

import { IsInt, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class customerDto{
    @IsString()
    name: string;
    @IsString()
    email: string;
    @IsInt()
    password: number
}