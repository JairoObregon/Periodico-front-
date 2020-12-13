import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './../shared/header/header.component';
import { FooterComponent } from './../shared/footer/footer.component';
import { NavAdminComponent } from './../shared/nav-admin/nav-admin.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavAdminComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavAdminComponent
  ],
  imports: [
    //BrowserModule,
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }