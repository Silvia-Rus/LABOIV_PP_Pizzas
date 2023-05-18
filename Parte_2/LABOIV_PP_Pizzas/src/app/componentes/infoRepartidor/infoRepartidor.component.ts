import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infoRepartidor',
  templateUrl: './infoRepartidor.component.html',
  styleUrls: ['./infoRepartidor.component.css']
})
export class InfoRepartidorComponent implements OnInit {

  @Input() inputItemSeleccionado: any;

  constructor() { }

  ngOnInit(): void {
  }

}
