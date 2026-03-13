import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/guards/role/role.decorator';
import { RoleGuard } from 'src/guards/role/role.guard';
import { Role } from 'src/guards/role/roles.enum';

@Controller('user-role')
export class UserRoleController {
    @Get('admin-data')
    @UseGuards(RoleGuard)
    @Roles(Role.Admin)
  getAdminData() {
        return { message: 'Only Admin can  Access data'}
    }

    @Get('user-data')
    getUserData(){
        return { message: 'Anyone can Access Data'}
    }
}
