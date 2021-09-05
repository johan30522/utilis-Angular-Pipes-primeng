import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Camiar el idioma local del app, se importa el formato del pais deseado
import  localEs  from "@angular/common/locales/es-MX";
import  localFr  from "@angular/common/locales/fr";
import  localEsLocal  from "@angular/common/locales/es";

import { registerLocaleData } from "@angular/common";


registerLocaleData(localEs);
registerLocaleData(localFr);
registerLocaleData(localEsLocal);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule
    

  ],
  exports:[

  ],
  providers: [
    {
      provide:LOCALE_ID,useValue:'es-MX'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
