import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { MercanciaService } from '../../domain/services/mercancia.service';

import {Mercancia} from '../../domain/models/mercancia.model';
import { MercanciaController } from './mercancia.controller';
import { AuthGuard } from '@nestjs/passport';

const errReturn = (e: Error, message: string) => {
  return {
    message: message,
    error: e
  }
}

@Controller()
export class MercanciaControllerImpl implements MercanciaController {
  constructor(@Inject('MercanciaService') private readonly productoService: MercanciaService) { }
  
  listMercancia() {
    throw new Error('Method not implemented.');
  }

  @Get()
  listMercanica() {
    try{
      return this.productoService.list();
    }
    catch(e){
      return errReturn(e, "Error al listar productos");
    }
  }

  @UseGuards(AuthGuard('local'))
  
  @Post()
  create(@Body() datos: Mercancia) {
    try{
      return this.productoService.create(datos);
    }
    catch(e){
      return errReturn(e, "Error al crear producto");
    }
  }

  @Put(":id")
  update(@Body() datos: Mercancia, @Param('id') id: number) {
    try{
      return this.productoService.update(id, datos);
    }
    catch(e){
      return errReturn(e, "Error al modificar producto");
    }
  }

  @Delete(":id")
  delete(@Param('id') id: number) {
    try{
      return this.productoService.delete(id);
    }
    catch(e){
      return errReturn(e, "Error al eliminar producto");
    }
  }

  @Patch(":id/duracion_dias/:duracion_dias")
  updateAge(@Param('id') id: number, @Param('duracion_dias') duracion_dias: number) {
    try{
      return this.productoService.updateAge(id, duracion_dias);
    }
    catch(e){
      return errReturn(e, "Error al modificar duracion del producto");
    }
  }
}