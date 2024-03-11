import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwiperPage } from './swiper.page';

@NgModule({
  declarations: [SwiperPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [SwiperPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperPageModule {}
