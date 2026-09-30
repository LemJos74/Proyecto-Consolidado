import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Inicio } from './components/inicio/inicio';
import { Categorias } from './components/categorias/categorias';
import { Productos } from './components/productos/productos';
import { Ofertas } from './components/ofertas/ofertas';
import { Resenas } from './components/resenas/resenas';

@Component({
  imports: [RouterOutlet, Navbar, Inicio, Categorias, Productos, Ofertas, Resenas],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Proyecto');
}
