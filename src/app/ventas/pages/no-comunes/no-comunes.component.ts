import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'; 

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {
public nombre:string='Cindy';
public valoresGenero={m:'conocerlo',f:'conocerla'};
public genero:string="f";
public persona={
  nombre:'johan arroyo Porras',
  edad:11,
  sexo:'m'
};

public clientes:string[]=['Maria','Juan','Pedro','marco','telmo'];
clientesMapa={
  '=0':'no tenemos clientes esperando',
  '=1':'tenemos un cliente esperando',
  'other':'tenemos # clientes esperando'

};
  constructor(
    private readonly primeNGConfig:PrimeNGConfig
    ) { }

  ngOnInit(): void {
    this.primeNGConfig.ripple=true;
  }
  public cambiarCliente(){
    this.nombre='Johan';
    this.genero='m';
  }

  public borrarCliente(){
    this.clientes.splice(-1);
  }

}
