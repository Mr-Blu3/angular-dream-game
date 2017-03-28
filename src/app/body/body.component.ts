import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'body-list',
  template: `<router-outlet></router-outlet>`,
  styles: ['body.style.scss']
})
export class BodyComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
