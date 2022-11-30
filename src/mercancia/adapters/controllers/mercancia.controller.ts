import {Mercancia} from '../../domain/models/mercancia.model';

export interface MercanciaController {
  /**
    *  Retorna la lista de productos
    */
   listMercancia();

   /**
    * Crea un producto
    * @param datos Objeto con datos de producto
    */
    create(datos: Mercancia);

     /**
    * Modifica datos de un producto
    * @param datos Objeto con datos de producto
    * @param id Identificador único del producto
    */
   update(datos: Mercancia, id: number);

   /**
    * Elimina un producto
    * @param id Identificador único del producto
    */
    delete(id: number);

  /**
    * Cambia la duracion de un producto
    * @param id Identificador único del producto
    * @param duracion_dias Duracion del producto
    */
   updateAge(id: number, duracion_dias: number);
}