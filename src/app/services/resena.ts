import { Injectable, signal } from '@angular/core';
import { Resena } from '../interfaces/resena';

@Injectable({
  providedIn: 'root'
})
export class ResenaService {

  resenas = signal<Resena[]>([
    {
      nombre: 'Ana',
      comentario: 'Muy buena atención.'
    }
  ]);

  agregarResena(resena: Resena) {
    this.resenas.update(resenas => [...resenas, resena]);
  }

  obtenerResenas() {
    return this.resenas;
  }
}