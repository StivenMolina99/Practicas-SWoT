import { Body, Controller, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';
import { AppService } from './app.service';

interface Producto{
  nombre: string,
  materia_prima: string,
  duracion_dias: number
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private productos : Producto[] = [{
    nombre: "Kumis",
    materia_prima: "Leche",
    duracion_dias: 45
  }]

  @Get()
  getHello(): Producto[] {
    return this.productos;
  }

  @Post()
  crear(@Body() datos: Producto): Producto {
    this.productos.push(datos);
    return datos;
  }

  @Put(":id")
  modificar(@Body() datos: Producto, @Param('id') id: number): Producto | String{
    try{
      this.productos[id] = datos
      return this.productos[id];
    }
    catch{
      return `No fue posible modificar el Producto en la posición ${id}`
    }
  }

  @Delete(":id")
  eliminar(@Param('id') id: number){
    try{
      this.productos = this.productos.filter((val, index) => index != id);
      return true;
    }
    catch{
      return false;
    }
  }

  @Patch(":id/duracion_dias/:duracion_dias")
  cambiarDuracion(@Param('id') id: number, @Param('duracion_dias') duracion_dias: number): Producto | string{
    try{
      this.productos[id].duracion_dias = duracion_dias;
      return this.productos[id];
    }
    catch{
      return `No fue posible modificar al producto en la posición ${id}`
    }
  }
}