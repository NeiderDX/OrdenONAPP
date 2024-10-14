import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mesa } from '../../models/mesa.model';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  usuario: string = '';
  contrasena: string = '';

  // Definir el array de mesas con más de 8 mesas
// Definir el array de mesas con todas las mesas inicialmente libres
mesas: Mesa[] = [
  { id: 1, nombre: 'Mesa 1', ocupada: false, personas: 0, pedido: [] },
  { id: 2, nombre: 'Mesa 2', ocupada: false, personas: 0, pedido: [] },
  { id: 3, nombre: 'Mesa 3', ocupada: false, personas: 0, pedido: [] },
  { id: 4, nombre: 'Mesa 4', ocupada: false, personas: 0, pedido: [] },
  { id: 5, nombre: 'Mesa 5', ocupada: false, personas: 0, pedido: [] },
  { id: 6, nombre: 'Mesa 6', ocupada: false, personas: 0, pedido: [] },
  { id: 7, nombre: 'Mesa 7', ocupada: false, personas: 0, pedido: [] },
  { id: 8, nombre: 'Mesa 8', ocupada: false, personas: 0, pedido: [] },
  { id: 9, nombre: 'Mesa 9', ocupada: false, personas: 0, pedido: [] },
  { id: 10, nombre: 'Mesa 10', ocupada: false, personas: 0, pedido: [] },
];
 // Propiedad para manejar el estado de la vista
  vista: 'grid' | 'list' = 'grid';

  constructor(private router: Router) { }

  ngOnInit() {
    let extras = this.router.getCurrentNavigation();
    if (extras?.extras.state) {
      this.usuario = extras?.extras.state['usuario'];
      this.contrasena = extras?.extras.state['contrasena'];
    }
  }

  // Método para alternar entre vistas
  toggleView() {
    this.vista = this.vista === 'grid' ? 'list' : 'grid';
  }

  // Método para seleccionar una mesa
  seleccionarMesa(mesa: Mesa) {
    if (mesa.ocupada) {
      console.log(`La ${mesa.nombre} está ocupada. Pedido:`, mesa.pedido);
      // Redirigir a la página de detalles de la mesa
      this.router.navigate(['/detalle-mesa'], { state: { mesa } });
    } else {
      console.log(`La ${mesa.nombre} está libre.`);
      mesa.ocupada = true;
      mesa.personas = 2;  // Asigna una cantidad de personas por defecto
      // Redirigir a la página para tomar el pedido
      this.router.navigate(['/pedido'], { state: { mesa } });
    }
  }
}
