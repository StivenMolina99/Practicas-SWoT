import { Module } from '@nestjs/common';
import { MercanciaControllerImpl } from './mercancia/adapters/controladores/mercanciaImpl.controller';
import { MercanciaServiceImpl } from './mercancia/domain/services/mercanciaImpl.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MercanciaEntity } from './mercancia/domain/entities/mercancia.entity';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://edwinsm:<password>@cluster0.g9ift35.mongodb.net/?retryWrites=true&w=majority',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      synchronize: true, // Solo para desarrollo
      logging: true,
      autoLoadEntities: true,
      ssl: true,
    }),
    TypeOrmModule.forFeature([MercanciaEntity]),
    UsersModule,
  ],
  controllers: [MercanciaControllerImpl],
  providers: [
    {
      provide: 'PlayerService',
      useClass: MercanciaServiceImpl,
    },
  ],
})
export class AppModule {}