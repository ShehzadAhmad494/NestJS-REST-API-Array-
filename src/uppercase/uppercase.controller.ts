import { Body, Controller, Post } from '@nestjs/common';
import { UpperCasePipe } from 'src/common/custom-pipes/upper-case/upper-case.pipe';

@Controller('uppercase')
export class UppercaseController {

    @Post()

    upperCase(@Body('name',new UpperCasePipe()) name: string)
    {
        return { message: `Received Name ${name}`}
    }
}
