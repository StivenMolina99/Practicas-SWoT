import { Module } from '@nestjs/common';
import { MercanciaController } from './mercancia/adapters/controllers/mercancia.controller';
import { MercanciaService } from './mercancia/domain/services/mercancia.service';

@Module({
  imports: [],
  controllers: [MercanciaController],
  providers: [MercanciaService],
})
export class AppModule {}
