import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
    UserCreateRequest,
    UserNameUpdateRequest,
    UserReadResponse,
} from './user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('create')
    create(@Body() userCreateRequest: UserCreateRequest): void {
        this.userService.doCreate(userCreateRequest);
    }

    @Get('read/:id')
    async read(@Param('id') id: number): Promise<UserReadResponse> {
        return await this.userService.doRead(id);
    }

    @Patch('update')
    update(@Body() userNameUpdateRequest: UserNameUpdateRequest): void {
        return this.userService.doUpdate(
            userNameUpdateRequest.id,
            userNameUpdateRequest.phone,
        );
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: number): Promise<boolean> {
        return await this.userService.doDelete(id);
    }
}
