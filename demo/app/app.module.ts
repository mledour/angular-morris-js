import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { adminLteConf } from './admin-lte.conf';
import { LayoutModule, BoxModule } from 'angular-admin-lte';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';

import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    LoadingPageModule,
    MaterialBarModule,
    LayoutModule.forRoot(adminLteConf),
    BoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
