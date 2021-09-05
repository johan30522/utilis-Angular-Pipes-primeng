import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenadoComponent } from './pages/ordenado/ordenado.component';
import { MayusculasPipe } from './pipes/mayusculas/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela/vuela.pipe';
import { ColorPipe } from './pipes/color/color.pipe';
import { OrdenarPipe } from './pipes/ordenar/ordenar.pipe';




@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenadoComponent,
    MayusculasPipe,
    VuelaPipe,
    ColorPipe,
    OrdenarPipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenadoComponent

  ]
})
export class VentasModule { }
