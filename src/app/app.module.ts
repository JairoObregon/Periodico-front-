import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InicioComponent } from './periodico/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
//import { NoticiaComponent } from './periodico/noticia/noticia.component';
//import { ListanoticiaComponent } from './periodico/listanoticia/listanoticia.component';
//import { PortadaComponent } from './periodico/portada/portada.component';
import { NotfoundComponent } from './periodico/notfound/notfound.component';
import { AdminComponent } from './admin/admin.component';
import { LayoutPeriodicoComponent } from './periodico/layout-periodico/layout-periodico.component';
import { LayoutAdminComponent } from './admin/layout-admin/layout-admin.component';
//import { CategoriaListComponent } from './admin/categoria/categoria-list/categoria-list.component';


/*


import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavAdminComponent } from './shared/nav-admin/nav-admin.component';

*/
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
  //  NoticiaComponent,
  //  ListanoticiaComponent,
  //  PortadaComponent,
    NotfoundComponent,
    AdminComponent,
    LayoutPeriodicoComponent,
  //  CategoriaListComponent,
  LayoutAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
