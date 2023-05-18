import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-homePizzas',
  templateUrl: './homePizzas.component.html',
  styleUrls: ['./homePizzas.component.css']
})
export class HomePizzasComponent implements OnInit {
  
  listaItems: any;
  modificar: boolean = false;
  eliminar: boolean = false;
  borrar: boolean = false;
  pizzaAModificar: any;
  pizzaAEliminar: any;

  constructor(private db: FirestoreService) { }

  ngOnInit(): void {
    this.traerListaActualizada();
    console.log(this.listaItems);
  }

  traerListaActualizada() {
    this.db.getCollection('pizzas').subscribe(datos => this.listaItems = datos);
    //this.dbService.getUserAll().subscribe(datos => this.listaItems = datos);
  }

  agregarPizza(pizza: any) {
    this.db.addElement('pizzas', pizza.nombre, pizza);
  }

  modificarPizzas(pizza: any) {
    this.modificar = true;
    this.pizzaAModificar = pizza;
  }

  borrarPizza(pizza: any) {
    this.eliminar = true;
    this.pizzaAEliminar = pizza;
  }

  recibirPizzaModificada(pizzaNueva: any) {
    console.log(pizzaNueva);
  }
  recibirPizzaAEliminar(pizzaNueva: any) {
    console.log(pizzaNueva);
  }
}
