import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-homeRepartidor',
  templateUrl: './homeRepartidor.component.html',
  styleUrls: ['./homeRepartidor.component.css']
})
export class HomeRepartidorComponent implements OnInit {

  listaRepartidores: any;
  repartidorRes: any;
  repartidor: any;
  constructor(public listaRepartidor: FirestoreService,
              private spinnerService: NgxSpinnerService
             ) { }

  ngOnInit(): void {
    this.listaRepartidor.getCollection("repartidores")
                     .subscribe(datos => this.listaRepartidores = datos);
  }

  async getRepartidor(repartidor: any) {
  
    this.repartidor = null;
    await setTimeout(() => {
      this.repartidor = repartidor;
      console.log(repartidor);
    }, 200);
  }

}
