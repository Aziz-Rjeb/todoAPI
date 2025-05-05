import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/**
 * A global module providing access to the PrismaService throughout the application.
 * This module is responsible for instantiating the PrismaService and making it available for dependency injection.
 *
 * @class
 * @exports PrismaModule
 */
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}