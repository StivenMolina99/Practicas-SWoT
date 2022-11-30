import { Module } from '@nestjs/common';
import { MercanciaControllerImpl } from './mercancia/adapters/controllers/mercanciaImpl.controller';
import { MercanciaServiceImpl } from './mercancia/domain/services/mercanciaImpl.service';

@Module({
  imports: [],
  controllers: [MercanciaControllerImpl],
  providers: [
    {
      provide: 'MercanciaService',
      useClass: MercanciaServiceImpl
    }
              ],
})
export class AppModule {}