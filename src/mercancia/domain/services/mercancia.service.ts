import { InsertResult, UpdateResult } from 'typeorm';
import { MercanciaEntity } from '../entities/mercancia.entity';

export interface MercanciaService {
  /**
   * Retorna la lista de productos registrados
   */
  list(): Promise<MercanciaEntity[]>;

  /**
   * Crea un nuevo producto
   * @param mercancia datos del nuevo producto
   * @return Resultado del proceso
   */
  create(mercancia: MercanciaEntity): Promise<InsertResult>;

  /**
   * Actualiza datos de producto
   * @param id Identificador único del producto
   * @param mercancia datos del producto
   * @return Producto modificado
   */
  update(id: number, mercanciaData: MercanciaEntity): Promise<UpdateResult>;

  /**
   * Eliminar un producto
   * @param id Identificador único del producto
   * @return True si eliminó al producto
   */
  delete(id: number): Promise<boolean>;

  /**
   * Cambia la edad de un producto
   * @param id Identificador único del producto
   * @param duracion_dias nuevo valor de duracion
   */
  updateAge(id: number, duracion_dias: number): Promise<UpdateResult>;
}