import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiPaisesService } from 'src/app/servicios/apiPaises.service';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-crearRepartidor',
  templateUrl: './crearRepartidor.component.html',
  styleUrls: ['./crearRepartidor.component.css']
})
export class CrearRepartidorComponent implements OnInit {

  form!: FormGroup;

  dni: any;
  nombre: any;
  edad: any;
  capacidad: any;
  pais: any;
  unidad = null;
  correcto: boolean = false;
  listaPaises: any;

  continente = 'europe';

  constructor(private countries: ApiPaisesService, 
              private db: FirestoreService, 
              private readonly fb: FormBuilder,) {
    this.countries.getListadoPaises('https://restcountries.com/v3.1/region/europe').subscribe((data: any) => {
      this.listaPaises = data;
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      dni: ['', [Validators.pattern("^[0-9]+"), Validators.minLength(8), Validators.maxLength(8)]],
      nombre: ['', [Validators.minLength(3), Validators.maxLength(20)]],
      capacidad: ['', [Validators.min(1), Validators.max(200)]],
      edad: ['', [Validators.min(18), Validators.max(99)]],
      pais: [''],
      unidad: [''],
      continente: [''],

    });
  }

  getValue(value: string): AbstractControl {
    return this.form.get(value) as FormGroup;
  }

  reset() {
    this.ngOnInit();
  }

  getPaises(pais: any) {
    this.pais = pais.name.common;
  }

  addDelivery() {
    this.db.addRepartidor(this.form).then(() => {
      this.correcto = true;
      this.reset();
      setTimeout(() => {
        this.correcto = false;
      }, 2000);
    });
  }

  changeTable() {
    this.countries.getListadoPaises('https://restcountries.com/v3.1/region/' + this.continente).subscribe((data: any) => {
      this.listaPaises = data;
    });
  }

}
