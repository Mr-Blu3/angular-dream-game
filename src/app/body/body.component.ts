/**
 * Created by mr-blue on 2017-03-20.
 */
import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'body-list',
  template: `<router-outlet></router-outlet>`
})
export class BodyComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
