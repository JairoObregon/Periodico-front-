import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {CategoriaListComponent} from './categoria/categoria-list/categoria-list.component';



@NgModule({
  declarations: [CategoriaListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }