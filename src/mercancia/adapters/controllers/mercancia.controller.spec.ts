import { Test, TestingModule } from '@nestjs/testing';
import { MercanciaController } from './mercancia.controller';
import { MercanciaService } from '../../domain/services/mercancia.service';

describe('AppController', () => {
  let appController: MercanciaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MercanciaController],
      providers: [MercanciaService],
    }).compile();

    appController = app.get<MercanciaController>(MercanciaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
