import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {
   nombre = signal('');
  comentario = signal('');

  resenas = signal([
    {
      nombre: 'Ana',
      comentario: 'Muy buena atención.'
    }
  ]);

  agregarResena() {

    if (this.nombre() === '' || this.comentario() === '') {
      return;
    }

    this.resenas.update(resenas => [
      ...resenas,
      {
        nombre: this.nombre(),
        comentario: this.comentario()
      }
    ]);

    this.nombre.set('');
    this.comentario.set('');
  }

}
