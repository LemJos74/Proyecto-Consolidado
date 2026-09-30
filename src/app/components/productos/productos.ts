import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {
  productos = [
    {
      nombre: 'iPhone 15',
      precio: 2999,
      categoria: 'Celulares',
      imagen: 'https://placehold.co/600x400?text=iPhone+15'
    },
    {
      nombre: 'Samsung Galaxy S24',
      precio: 2499,
      categoria: 'Celulares',
      imagen: 'https://placehold.co/600x400?text=Galaxy+S24'
    },
    {
      nombre: 'Lenovo IdeaPad 3',
      precio: 1899,
      categoria: 'Laptops',
      imagen: 'https://placehold.co/600x400?text=Lenovo+IdeaPad'
    },
    {
      nombre: 'HP Pavilion',
      precio: 2399,
      categoria: 'Laptops',
      imagen: 'https://placehold.co/600x400?text=HP+Pavilion'
    },
    {
      nombre: 'Audífonos Bluetooth',
      precio: 129,
      categoria: 'Accesorios',
      imagen: 'https://placehold.co/600x400?text=Audifonos'
    },
    {
      nombre: 'Cargador USB-C',
      precio: 79,
      categoria: 'Accesorios',
      imagen: 'https://placehold.co/600x400?text=Cargador'
    }
  ];
}
