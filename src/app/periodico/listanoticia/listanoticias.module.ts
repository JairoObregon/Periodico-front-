import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListanoticiasRoutingModule } from './listanoticias-routing.module';
import {ListanoticiaComponent} from './listanoticia.component';
import {SharedModule} from './../../shared/shared.module';


@NgModule({
  declarations: [ListanoticiaComponent],
  imports: [
    CommonModule,
    ListanoticiasRoutingModule,
    SharedModule
  ]
})
export class ListanoticiasModule { }
