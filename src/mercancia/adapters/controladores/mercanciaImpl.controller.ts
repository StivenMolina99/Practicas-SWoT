import {
    Body,
    Controller,
    Delete,
    Get,
    Inject,
    Param,
    Patch,
    Post,
    Put,
    UseGuards,
  } from '@nestjs/common';
  import { MercanciaService } from '../../domain/services/mercancia.service';
  
  import { MercanciaController } from './mercancia.controller';
  import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
  import { MercanciaEntity } from 'src/mercancia/domain/entities/mercancia.entity';
  
  const errReturn = (e: Error, message: string) => {
    return {
      message: message,
      error: e,
    };
  };
  
  @Controller()
  export class MercanciaControllerImpl implements MercanciaController {
    constructor(
      @Inject('MercanciaService') private readonly productoService: MercanciaService,
    ) {}
  
    @Get()
    listPlayers() {
      try {
        return this.productoService.list();
      } catch (e) {
        return errReturn(e, 'Error al listar productos');
      }
    }
  
    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() datos: MercanciaEntity) {
      try {
        return this.productoService.create(datos);
      } catch (e) {
        return errReturn(e, 'Error al crear producto');
      }
    }
  
    @Put(':id')
    update(@Body() datos: MercanciaEntity, @Param('id') id: number) {
      try {
        return this.productoService.update(id, datos);
      } catch (e) {
        return errReturn(e, 'Error al modificar producto');
      }
    }
  
    @Delete(':id')
    delete(@Param('id') id: number) {
      try {
        return this.productoService.delete(id);
      } catch (e) {
        return errReturn(e, 'Error al eliminar prducto');
      }
    }
  
    @Patch(':id/duracion_dias/:duracion_dias')
    updateAge(@Param('id') id: number, @Param('duracion_dias') duracion_dias: number) {
      try {
        return this.productoService.updateAge(id, duracion_dias);
      } catch (e) {
        return errReturn(e, 'Error al modificar duracion del producto');
      }
    }
  }