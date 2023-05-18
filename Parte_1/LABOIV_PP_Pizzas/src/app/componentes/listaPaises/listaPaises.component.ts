import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-listaPaises',
  templateUrl: './listaPaises.component.html',
  styleUrls: ['./listaPaises.component.css']
})
export class ListaPaisesComponent implements OnInit {

  @Input() listaPaises: any;
  @Output() paisEmitido: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitirPais(pais: any) {
    this.paisEmitido.emit(pais);
  }

}
