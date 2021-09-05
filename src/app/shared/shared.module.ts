import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
;
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {FieldsetModule} from 'primeng/fieldset';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';

import { MenuComponent } from './menu/menu.component';
import { AppRouterModule } from '../app-router.module';
import { ConvertStringPipe } from './pipes/convertString/convert-string.pipe';





@NgModule({
  declarations: [
    MenuComponent,
    ConvertStringPipe
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    AppRouterModule,
    FieldsetModule,
    ToolbarModule,
    TableModule
    
    
  ],
  exports:[
    CommonModule,
    ButtonModule,
    CardModule,
    MenuComponent,
    AppRouterModule,
    FieldsetModule,
    ConvertStringPipe,
    ToolbarModule,
    TableModule
  ]
})
export class SharedModule { }
