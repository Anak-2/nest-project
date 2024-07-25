import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.moudle';
import { DatabaseModule } from './data/database.moudle';

@Module({
    imports: [UserModule, DatabaseModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
