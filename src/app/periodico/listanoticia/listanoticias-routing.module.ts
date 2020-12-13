import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListanoticiaComponent } from './listanoticia.component';

const routes: Routes = [
  {
  path: 'lista/:id',
  component: ListanoticiaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListanoticiasRoutingModule { }
