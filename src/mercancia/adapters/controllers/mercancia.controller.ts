import { Body, Controller, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';
import { MercanciaService } from '../../domain/services/mercancia.service';

import {Mercancia} from '../../domain/models/mercancia.model';

const errReturn = (e: Error, message: string) => {
  return {
    message: message,
    error: e,
  }
}

@Controller()
export class MercanciaController {
  constructor(private readonly productoService: MercanciaService) { }

  @Get()
  getHello() {
    try{
      return this.productoService.listar();
    }
    catch(e){
      return errReturn(e, "Error al listar productos");
    }
  }

  @Put(":id")
  modificar(@Body() datos: Mercancia, @Param('id') id: number) {
    try{
      return this.productoService.modificar(id, datos);
    }
    catch{
      return errReturn(e, "Error al modificar producto");
    }
  }

  @Delete(":id")
  eliminar(@Param('id') id: number){
    try{
      return this.productoService.eliminar(id);
    }
    catch(e){
      return errReturn(e, "Error al eliminar producto");
    }
  }

  @Patch(":id/duracion_dias/:duracion_dias")
  cambiarDuracion(@Param('id') id: number, @Param('duracion_dias') duracion_dias: number) {
    try{
      return this.productoService.cambiarDuracion(id, duracion_dias);
    }
    catch{
      return errReturn(e, "Error al modificar duracion_dias del producto");
    }
  }
}