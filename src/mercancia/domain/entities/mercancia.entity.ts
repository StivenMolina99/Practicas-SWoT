import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity('mercancia')
export class MercanciaEntity {
  @ObjectIdColumn()
  id: string;

  @Column()
  nombre: string;

  @Column()
  materia_prima: string;

  @Column()
  duracion_dias: number;

  @Column()
  grupo: string;
}