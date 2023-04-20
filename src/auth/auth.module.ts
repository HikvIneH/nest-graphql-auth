import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [PassportModule],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
