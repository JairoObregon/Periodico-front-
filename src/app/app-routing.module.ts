import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './periodico/inicio/inicio.component'
import {NotfoundComponent} from './periodico/notfound/notfound.component'
import {LayoutPeriodicoComponent} from './periodico/layout-periodico/layout-periodico.component'
import {LayoutAdminComponent} from './admin/layout-admin/layout-admin.component'

const routes: Routes = [
  { 
    path: '',
    component :LayoutPeriodicoComponent,
    children: [
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full',
      },
      {
        path: 'inicio',
        component:InicioComponent
      },
      {
        path: 'portada',
        loadChildren: () => import('./periodico/portada/portada.module').then(m => m.PortadaModule),
      },
      {
        path: 'no',
        loadChildren: () => import('./periodico/noticia/noticia.module').then( m => m.NoticiaModule)
      },
      {
        path: 'lista',
        loadChildren: () => import('./periodico/listanoticia/listanoticias.module').then( m => m.ListanoticiasModule)
  },
    ]
  },
  {
    path: 'admin',
    component :LayoutAdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/admin',
        pathMatch: 'full',
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule)
      },
     
    ]
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
