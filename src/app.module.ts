import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import { PrismaModule } from './prisma/prisma.module';
import { CustomConfigModule } from './config/config.module';

@Module({
  imports: [
    CustomConfigModule,
    PrismaModule,
    AuthModule,
    TodoModule,
  ],
})
export class AppModule {}