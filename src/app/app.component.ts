import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public platform: Platform) {}
  // pegando o tipo de dispositivo que está sendo usado
  ngOnInit() {
    console.log(this.platform.platforms())
    // retorno pra mim
    // ['android', 'mobile', 'mobileweb']
  }


}
