import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-resenas',
  styleUrl: './resenas.css',
  templateUrl: './resenas.html',
})
export class Resenas {
   resenas = [
    {
      nombre: 'Carlos',
      comentario: 'Excelente producto y buena atención.',
      puntuacion: 5
    },
    {
      nombre: 'María',
      comentario: 'La laptop llegó rápido y en buen estado.',
      puntuacion: 4
    },
    {
      nombre: 'Luis',
      comentario: 'Buenos precios y variedad de productos.',
      puntuacion: 5
    }
  ];
}
