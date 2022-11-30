import { Mercancia } from "../models/mercancia.model";

export interface MercanciaService {

   /**
    * Retorna la lista de productos registrados
    */
   list(): Mercancia[];

   /**
    * Crea un nuevo producto
    * @param mercancia datos del nuevo producto
    * @return Nuevo producto
    */
   create(mercancia: Mercancia): Mercanica;

   /**
    * Actualiza datos de producto
    * @param id Identificador único del producto
    * @param mercanicia datos del producto
    * @return Producto modificado
    */
   update(id: number, mercancia: Mercancia): Mercancia

   /**
    * Eliminar un producto
    * @param id Identificador único del producto
    * @return True si eliminó al producto
    */
   delete(id: number): boolean

   /**
    * Cambia la duracion de un producto
    * @param id Identificador único del producto
    * @param duracion_dias nuevo valor de duracion
    */
   updateAge(id: number, duracion_dias: number): Mercancia
}