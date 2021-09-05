import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  public nombreLower:string='johan';
  public nombreUpper:string='JOHAN';
  public nombreCompleto:string='JoHaN ArRoYo';
  public fecha:Date=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
