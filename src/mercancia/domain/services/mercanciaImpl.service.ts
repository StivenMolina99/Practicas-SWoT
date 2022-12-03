import { Injectable } from '@nestjs/common';
import { Mercancia } from '../models/mercancia.model';
import { MercanciaService } from './mercancia.service';

@Injectable()
export class MercanciaServiceImpl implements MercanciaService {

  private mercancia: Mercancia[] = [{
    nombre: 'Kumis',
    materia_prima: 'Leche',
    duracion_dias: 45,
    grupo: 'Estandar'
  }]

  public list() : Mercancia[] {
    return this.mercancia
  }

  public create(producto: Mercancia): Mercancia {
    this.mercancia.push(producto);
    return producto;
  }

  public update(id: number, producto: Mercancia): Mercancia {
      this.mercancia[id] = producto
      return this.mercancia[id];
  }

  public delete(id: number): boolean {
    const totalProductosAntes = this.mercancia.length;
    this.mercancia = this.mercancia.filter((val, index) => index != id);
    if(totalProductosAntes == this.mercancia.length){
      return false;
    }
    else{
      return true;
    }
  }

   public updateAge(id: number, duracion_dias: number): Mercancia {
      this.mercancia[id].duracion_dias = duracion_dias;
      return this.mercancia[id];
   }

}