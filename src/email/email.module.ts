import { Module } from '@nestjs/common';
import { EmailService } from 'src/users/email/email.service';

@Module({
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
