import { DataSource } from 'typeorm';
import { UserEntity } from './entity/user.entity';
const dotenv = require('dotenv').config();

// todo: nestjs/config 로 환경변수 설정 변경해보기
export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '1234',
                database: 'nest-study',
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];
