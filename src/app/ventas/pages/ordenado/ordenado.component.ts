import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas-interface';

@Component({
  selector: 'app-ordenado',
  templateUrl: './ordenado.component.html',
  styleUrls: ['./ordenado.component.css']
})
export class OrdenadoComponent implements OnInit {
  public esMayuscula: boolean = true;
  public opcionOrdenamiento = 'sin valor';
  public heroes: Heroe[] = [
    {
      nombre: 'ironman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'aquaman',
      vuela: false,
      color: Color.amarillo
    },
    {
      nombre: 'hulk',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'batman',
      vuela: false,
      color: Color.negro
    },


  ]
    ;

  constructor() { }

  ngOnInit(): void {
  }
  public cambiarMayuscula() {

    this.esMayuscula = !this.esMayuscula;
  }
  public cambiarOrdenamiento(opcion: string) {
   // console.log(opcion);
    this.opcionOrdenamiento = opcion;
  }

}
