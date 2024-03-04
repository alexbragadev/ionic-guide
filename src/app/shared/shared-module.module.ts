import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteButtonComponent } from './components/white-button/white-button.component';

import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

@NgModule({
  declarations: [
    WhiteButtonComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    WhiteButtonComponent
  ]
})
export class SharedModuleModule { }
