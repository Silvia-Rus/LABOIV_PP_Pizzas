import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pizza } from 'src/app/clases/pizza';
import { FirestoreService } from 'src/app/servicios/firestore.service';


@Component({
  selector: 'app-crearPizza',
  templateUrl: './crearPizza.component.html',
  styleUrls: ['./crearPizza.component.css']
})
export class CrearPizzaComponent implements OnInit {

  form!: FormGroup;

  @Output() pizzaCreada: EventEmitter<any> = new EventEmitter();

  nombre: any;
  ingredientes: any;
  peso: any;
  precio: any;
  correcto: boolean = false;

  constructor(private readonly fb: FormBuilder,
              private db: FirestoreService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', [Validators.minLength(3), Validators.maxLength(20)]],
      ingredientes: ['', [Validators.minLength(3), Validators.maxLength(20)]],
      precio: ['', [Validators.min(1)]],
      peso: ['', [Validators.min(500), Validators.max(1000)]]
    })
  }
  getValue(value: string): AbstractControl {
    return this.form.get(value) as FormGroup;
  }
  reset() {
    this.ngOnInit();
  }
  crearPizza() {
    const pizza = new Pizza(this.form.value.nombre,
                            this.form.value.ingredientes,
                            this.form.value.precio,
                            this.form.value.peso);
    this.db.addPizza(pizza);
    this.pizzaCreada.emit(pizza);
    this.reset();
  }
}


