import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuItems: string[] = ['11', '22', '33', '44', '55'];
  items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [{
          label: 'Textos y Fechas',
          icon: 'pi pi-align-left',
          routerLink: '/'
        },
        {
          label: 'Numeros',
          icon: 'pi pi-dollar',
          routerLink: '/numeros'
        },
        {
          label: 'Ordenar',
          icon: 'pi pi-sort',
          routerLink: '/ordenar'
        },
        {
          label: 'No Comunes',
          icon: 'pi pi-globe',
          routerLink: '/no-comunes'
        },
        { label: 'Open' },
        { label: 'Quit' }
        ]
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        routerLink:'ordenar'
      }
    ];
  }

}
