import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './page-login.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';


@NgModule({
  declarations: [
    PageLoginComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  exports: [
    PageLoginComponent
  ]
})
export class PageLoginModule { }
