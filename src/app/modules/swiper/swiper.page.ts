import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { IonicSlides } from '@ionic/angular';

register();

@Component({
  selector: 'swiper-js',
  templateUrl: './swiper.page.html',
  styleUrls: ['./swiper.page.scss'],
})
export class SwiperPage implements OnInit {
  swiperModules = [IonicSlides];
  constructor() { }

  ngOnInit() {
  }

}
