import { Component, Input, OnInit } from '@angular/core';
import { ApiPaisesService } from 'src/app/servicios/apiPaises.service';

@Component({
  selector: 'app-infoPaisRepartidor',
  templateUrl: './infoPaisRepartidor.component.html',
  styleUrls: ['./infoPaisRepartidor.component.css']
})
export class InfoPaisRepartidorComponent implements OnInit {

  @Input() inputItemSeleccionado: any;

  constructor(private api: ApiPaisesService) { }

  detallePais: any;

  ngOnInit(): void {
    console.log(this.inputItemSeleccionado);
    this.api.getListadoPaises('https://restcountries.com/v2/name/' + this.inputItemSeleccionado.pais).subscribe((data: any) => {
      this.detallePais = data[0];
      console.log(data[0]);
    });
  }

}
