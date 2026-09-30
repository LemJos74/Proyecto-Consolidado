import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ResenaService } from '../../services/resena';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {

  nombre = '';
  comentario = '';

  constructor(private resenaService: ResenaService) {}

  agregarResena() {

    if (this.nombre === '' || this.comentario === '') {
      return;
    }

    this.resenaService.agregarResena({
      nombre: this.nombre,
      comentario: this.comentario
    });

    this.nombre = '';
    this.comentario = '';
  }

  get resenas() {
    return this.resenaService.obtenerResenas();
  }

}