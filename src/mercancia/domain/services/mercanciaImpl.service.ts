import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, MongoRepository, UpdateResult } from 'typeorm';
import { MercanciaEntity } from '../entities/mercancia.entity';
import { MercanciaService } from './mercancia.service';

@Injectable()
export class MercanciaServiceImpl implements MercanciaService {
  constructor(
    @InjectRepository(MercanciaEntity)
    private readonly repository: MongoRepository<MercanciaEntity>,
  ) {}

  public async list(): Promise<MercanciaEntity[]> {
    return await this.repository.find();
  }

  public async create(mercanciaData: MercanciaEntity): Promise<InsertResult> {
    const newMercancia = await this.repository.insert(mercanciaData);
    return newMercancia;
  }

  public async update(
    id: number,
    mercanciaData: MercanciaEntity,
  ): Promise<UpdateResult> {
    const updatedMercancia = await this.repository.update(id, mercanciaData);
    return updatedMercancia;
  }

  public async delete(id: number): Promise<boolean> {
    const deleteResult = await this.repository.delete(id);
    return deleteResult.affected > 0;
  }

  public async updateAge(id: number, duracion_dias: number): Promise<UpdateResult> {
    const updatedMercancia = await this.repository.update(id, { duracion_dias: duracion_dias });
    return updatedMercancia;
  }
}