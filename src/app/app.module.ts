import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PageLoginModule } from './modules/page-login/page-login.module';
import { VirtualScrollModule } from './modules/virtual-scroll/virtual-scroll.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    PageLoginModule,
    VirtualScrollModule,
    AppRoutingModule,
    IonicModule.forRoot() 
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
