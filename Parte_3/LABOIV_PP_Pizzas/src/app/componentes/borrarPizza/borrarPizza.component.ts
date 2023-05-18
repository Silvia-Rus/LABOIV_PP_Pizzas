import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/servicios/firestore.service';


@Component({
  selector: 'app-borrarPizza',
  templateUrl: './borrarPizza.component.html',
  styleUrls: ['./borrarPizza.component.css']
})
export class BorrarPizzaComponent implements OnInit, OnChanges {

  form!: FormGroup;

  @Output() pizzaBorrada: EventEmitter<any> = new EventEmitter();
  @Input() pizza: any;

  nombre: any;
  ingredientes: any;
  peso: any;
  precio: any;
  correcto: boolean = false;

  constructor(private db: FirestoreService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['pizza']) {
      this.ngOnInit();
    }
  }

  ngOnInit(): void {
    if(this.pizza != undefined)
    {
      this.nombre = 'Nombre: '+this.pizza.nombre;
      this.ingredientes = 'Ingredientes: '+this.pizza.ingredientes;
      this.peso = this.pizza.peso+' g.';
      this.precio = this.pizza.precio+'$';
    }
   }

    reset() {
      this.nombre = '';
      this.ingredientes = '';
      this.peso = '';
      this.precio = '';
    }

    borrarPizza() {
      this.db.borrarPizza(this.pizza);
      this.pizzaBorrada.emit(this.pizza);
      this.reset();
    }

}
