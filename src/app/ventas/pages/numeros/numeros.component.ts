import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {


  public ventasNetas:number=534534533.255;
  public porcentaje:number=0.4844;

  constructor() { }

  ngOnInit(): void {
  }

}
