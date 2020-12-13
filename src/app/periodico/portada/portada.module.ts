import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortadaRoutingModule } from './portada-routing.module';
import { PortadaComponent } from './portada.component';
import { SharedModule } from './../../shared/shared.module';
import {HeaderComponent} from './../../shared/header/header.component'



@NgModule({
  declarations: [PortadaComponent,],
  imports: [
    CommonModule,
    SharedModule,
    PortadaRoutingModule,
   // 
  
  ]
})
export class PortadaModule { }
