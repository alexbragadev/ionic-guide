import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss'],
})
export class VirtualScrollComponent  implements OnInit {

  items?: Array<any>;

  constructor() { }

  ngOnInit() {
    let i = 1;
    this.items = new Array(30).fill(null).map(() => ({ name: 'Person: '+i++ }));
  }

}
