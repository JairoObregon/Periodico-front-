import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortadaComponent} from './portada.component';


const routes: Routes = [
  {
    path: '',
    component: PortadaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortadaRoutingModule { }
