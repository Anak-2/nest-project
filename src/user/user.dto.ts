import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { UserEntity } from 'src/data/entity/user.entity';

export class UserCreateRequest {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    toEntity(): UserEntity {
        const user = new UserEntity();
        user.name = this.name;
        user.phone = this.phone;
        return user;
    }
}

export class UserReadResponse {
    name: string;
    phone: string;
}

export class UserNameUpdateRequest {
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    phone: string;
}
