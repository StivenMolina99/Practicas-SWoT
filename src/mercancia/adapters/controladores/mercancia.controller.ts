import { MercanciaEntity } from 'src/mercancia/domain/entities/mercancia.entity';

export interface MercanciaController {
  /**
   *  Retorna la lista de jugadores
   */
  listPlayers();

  /**
   * Crea un jugador
   * @param datos Objeto con datos de jugador
   */
  create(datos: MercanciaEntity);

  /**
   * Modifica datos de un jugador
   * @param datos Objeto con datos de jugador
   * @param id Identificador único del jugador
   */
  update(datos: MercanciaEntity, id: number);

  /**
   * Elimina un jugador
   * @param id Identificador único del jugador
   */
  delete(id: number);

  /**
   * Cambia la edad de un jugador
   * @param id Identificador único del jugador
   * @param edad Edad del jugador
   */
  updateAge(id: number, edad: number);
}