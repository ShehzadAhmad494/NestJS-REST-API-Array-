import { Controller, Get, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { GlobalExceptionFilter } from './exception.filter';

@Controller('exception')
export class ExceptionController {
    @UseFilters(GlobalExceptionFilter)
    @Get('hello/:id')
    getHello(@Param('id',ParseIntPipe) id:number){
    return { Message: `Your Id is ${id}` };

    }
}
