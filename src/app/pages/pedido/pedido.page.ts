import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mesa } from '../../models/mesa.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {
  mesa: Mesa;
  categorias = ['Entrada', 'Fondo', 'Bebestible', 'Postre'];
  pedido: { categoria: string, descripcion: string }[] = [];

  constructor(private router: Router) { 
    const nav = this.router.getCurrentNavigation();
    this.mesa = nav?.extras.state?.['mesa'];

    // Inicializa las categorías con un campo de descripción vacío
    this.pedido = this.categorias.map(categoria => ({ categoria, descripcion: '' }));
  }

  ngOnInit() {
  }

  confirmarPedido() {
    this.mesa.ocupada = true;  // Marca la mesa como ocupada
    const pedidoFinal = this.pedido.filter(item => item.descripcion.trim() !== '');

    if (pedidoFinal.length === 0) {
      alert('Debes ingresar al menos un pedido para alguna categoría');
      return;
    }

    console.log('Pedido confirmado:', pedidoFinal);  // Aquí puedes manejar el pedido como necesites
    this.router.navigate(['/principal'], { state: { mesa: this.mesa } });  // Regresa a la vista principal con la mesa actualizada
  }

  actualizarPedido(index: number, descripcion: string) {
    this.pedido[index].descripcion = descripcion;
  }
}
