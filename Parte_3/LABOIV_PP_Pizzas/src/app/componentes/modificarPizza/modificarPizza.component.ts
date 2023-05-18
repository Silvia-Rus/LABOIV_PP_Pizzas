import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pizza } from 'src/app/clases/pizza';
import { FirestoreService } from 'src/app/servicios/firestore.service';


@Component({
  selector: 'app-modificarPizza',
  templateUrl: './modificarPizza.component.html',
  styleUrls: ['./modificarPizza.component.css']
})

export class ModificarPizzaComponent implements OnInit {

  form!: FormGroup;

  @Output() pizzaCreada: EventEmitter<any> = new EventEmitter();
  @Input() pizza: any;

  nombre: any;
  ingredientes: any;
  peso: any;
  precio: any;

  constructor(private readonly fb: FormBuilder,
              private db: FirestoreService) {
}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pizza']) {
      this.ngOnInit();
    }
  }

  getValue(value: string): AbstractControl {
    return this.form.get(value) as FormGroup;
  }
 
  ngOnInit(): void {

    if(this.pizza != undefined){
      this.nombre = this.pizza.nombre;
      this.ingredientes = this.pizza.ingredientes;
      this.peso = this.pizza.peso;
      this.precio = this.pizza.precio;
    }

    this.form = this.fb.group({
      nombre: [{value: '', disabled: true},[Validators.minLength(3), Validators.maxLength(20)]],
      ingredientes: ['', [Validators.minLength(3), Validators.maxLength(20)]],
      precio: ['', [Validators.min(1)]],
      peso: ['', [Validators.min(500), Validators.max(1000)]]
    })
  }
  reset() {
      this.nombre = '';
      this.ingredientes = '';
      this.peso = '';
      this.precio = '';
  }

  modificarPizza() {
    this.form.value.ingredientes ? this.ingredientes = this.form.value.ingredientes : this.ingredientes ;
    this.form.value.precio ? this.precio = this.form.value.precio : this.precio ;
    this.form.value.peso ? this.peso = this.form.value.peso : this.peso ;

    let pizzaBorrada = new Pizza(this.nombre,
                                 this.ingredientes,
                                 this.precio,
                                 this.peso)                       
    this.db.modificarPizzas(pizzaBorrada);
    this.pizzaCreada.emit(pizzaBorrada);
    this.reset();
  }

}
