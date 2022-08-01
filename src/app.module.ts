import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { EmailService } from './users/email/email.service';
import { EmailModule } from './email/email.module';

@Module({
  imports: [UsersModule, EmailModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, EmailService],
})
export class AppModule {}
