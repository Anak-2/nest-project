import { Get, Inject, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/data/entity/user.entity';
import { Repository } from 'typeorm';
import { UserCreateRequest, UserReadResponse } from './user.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UserService {
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>;

    doCreate(userCreateRequest: UserCreateRequest): void {
        // console.log(userCreateRequest instanceof UserCreateRequest);
        // 자바스크립트는 클래스의 인스턴스가 아닌 단순한 객체를 넘겨주기 때문에 class transfromer를 이용해야 클래스 내부의 메서드를 이용할 수 있다
        const userCreateClass = plainToClass(
            UserCreateRequest,
            userCreateRequest,
        );
        this.userRepository.save(userCreateClass.toEntity());
    }

    async doRead(id: number): Promise<UserReadResponse> {
        const userEntity = await this.userRepository.findOne({ where: { id } });
        const userReadResponse = new UserReadResponse();
        userReadResponse.name = userEntity.name;
        userReadResponse.phone = userEntity.phone;
        return userReadResponse;
    }

    // update 함수는 첫 번째 인수 조건에 맞는 Entity를 찾아서 두 번째 인수의 Object 값으로 업데이트
    doUpdate(id: number, phone: string): void {
        const phoneObj = { phone: phone };
        this.userRepository.update({ id: id }, phoneObj);
    }

    async doDelete(id: number): Promise<boolean> {
        return (await this.userRepository.delete({ id: id })) ? true : false;
    }
}
