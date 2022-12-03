import { Module } from '@nestjs/common';
import { MercanciaControllerImpl } from './mercancia/adapters/controllers/mercanciaImpl.controller';
import { MercanciaServiceImpl } from './mercancia/domain/services/mercanciaImpl.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [MercanciaControllerImpl],
  providers: [
    {
      provide: 'MercanciaService',
      useClass: MercanciaServiceImpl
    }
              ],
})
export class AppModule {}