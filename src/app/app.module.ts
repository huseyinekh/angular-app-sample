import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import {
  IgxButtonModule,
  IgxRippleModule,
  IgxIconModule,
  IgxNavbarModule,
  IgxNavigationDrawerModule,
  IgxToggleModule,
} from 'igniteui-angular';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,

    SidebarComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      autoDismiss: false,
      progressBar: true,
    }),
    NgxSpinnerModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    IgxToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
