import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedModuleModule } from '../../shared/shared-module.module';
import { VirtualScrollComponent } from './virtual-scroll.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    VirtualScrollComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModuleModule,
    ScrollingModule
  ],
  exports: [
    VirtualScrollComponent
  ]
})
export class VirtualScrollModule { }
