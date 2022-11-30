import {Test, TestingModule} from '@nestjs/testing';
import {AppController} from './product.controller';
import { MercanciaService } from  '../../domain/services/mercanciaImpl.service';

describe('AppController', () => {
    let appController: AppController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
        controllers: [AppController],
        providers: [MercanciaService],
        }).compile();

        appController = app.get<AppController>(AppController);
     });

     describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(appController.getHello()).toBe('Hello World!');
        });
    });
});