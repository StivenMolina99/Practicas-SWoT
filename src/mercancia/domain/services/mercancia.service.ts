import { Injectable } from '@nestjs/common';
//Importamos el modelo de la mercancia
import { Mercancia } from '../models/mercancia.model';

@Injectable()
export class MercanciaService {

  // Como no hay base de datos aun empleamos una variable en memoria:
  private mercancia: Mercancia[]=[{
     nombre: 'Kumis',
     materia_prima: 'Leche',
     duracion_dias: '45',
     grupo: 'Estandar'
  }]

  /**
    * Método para obtener todos los productos
    */
   public listar() : Mercancia[] {
    return this.mercancia
 }

 /**
    * Método para crear una mercancia
    */
  public crear(producto: Mercancia): Mercancia {
    this.mercancia.push(producto);
    return producto;
 }

 /**
    * Método para modificar un producto
    */
  public modificar(id: number, producto: Mercancia): Mercancia {
    this.mercancia[id] = producto
    return this.mercancia[id];
 }

 /**
    * Método para eliminar un producto
    * Debido a que usamos un filtro, para validar si se elimina el producto, 
    * primero se determina cuantos elementos hay en el arreglo y luego se hace una comparación.
    */
  public eliminar(id: number): boolean {
    const totalProductosAntes = this.mercancia.length;
    this.mercancia = this.mercancia.filter((val, index) => index != id);
    if(totalProductosAntes == this.mercancia.length){
       return false;
    }
    else{
       return true;
    }
 }
 /**
    * Método para modificar la duracion de un producto
    */
  public cambiarDuracion(id: number, duracion: number): Mercancia {
    this.mercancia[id].duracion_dias = duracion;
    return this.mercancia[id];
 }
}
