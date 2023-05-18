import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listaPizzas',
  templateUrl: './listaPizzas.component.html',
  styleUrls: ['./listaPizzas.component.css']
})
export class ListaPizzasComponent implements OnInit {

  constructor() { }

  @Input() listaItems: any;
  @Output() modificarPizzaEmit: EventEmitter<any> = new EventEmitter();
  @Output() borrarPizzaEmit: EventEmitter<any> = new EventEmitter();

  itemSeleccionado: any;
  opcion: any;
  modificar: boolean = false;

  headers = ["Nombre", "Ingredientes", "Peso", "Precio", "Editar", "Eliminar"];
  ngOnInit(): void {
  }

  async seleccionItem(item: any) {
    this.itemSeleccionado = undefined;
    await setTimeout(() => {
      this.itemSeleccionado = item;
    }, 200);
  }

  modificarPizza(pizza: any) {
    this.modificarPizzaEmit.emit(pizza);
  }

  borrarPizza(pizza: any) {
    this.borrarPizzaEmit.emit(pizza);
  }
}
