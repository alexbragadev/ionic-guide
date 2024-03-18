import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PageLoginModule } from './modules/page-login/page-login.module';
import { VirtualScrollModule } from './modules/virtual-scroll/virtual-scroll.module';
import { SwiperPageModule } from './modules/swiper/swiper.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    PageLoginModule,
    VirtualScrollModule,
    SwiperPageModule,
    AppRoutingModule,
    IonicModule.forRoot({
      platform: {
        /** The default `desktop` function returns false for devices with a touchscreen.
        * This is not always wanted, so this function tests the User Agent instead.
        **/
        'desktop': (win) => {
          const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(win.navigator.userAgent);
          return !isMobile;
        }
      },
    }) 
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}