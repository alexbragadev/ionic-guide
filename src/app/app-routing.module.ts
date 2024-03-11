import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login-page',
    loadChildren: () => import('./modules/page-login/page-login.module').then( m => m.PageLoginModule)
  },
  {
    path: 'virtual-scroll',
    loadChildren: () => import('./modules/virtual-scroll/virtual-scroll.module').then( m => m.VirtualScrollModule)
  },
  {
    path: 'swiper',
    loadChildren: () => import('./modules/swiper/swiper.module').then( m => m.SwiperPageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'login-page',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
