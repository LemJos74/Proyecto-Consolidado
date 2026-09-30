import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Inicio } from './components/inicio/inicio';
import { Categorias } from './components/categorias/categorias';
import { Productos } from './components/productos/productos';
import { Ofertas } from './components/ofertas/ofertas';
import { Resenas } from './components/resenas/resenas';
import { Formulario } from './components/formulario/formulario';
import { Nosotros } from './components/nosotros/nosotros';
import { Footer } from './components/footer/footer';

@Component({
  imports: [RouterOutlet, Navbar, Inicio, Categorias, Productos, Ofertas, Resenas, Formulario, Nosotros, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Proyecto');
}
