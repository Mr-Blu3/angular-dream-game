import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <header-list></header-list>
  
  <div class="container">
    <body-list></body-list>
  </div>
  
  <footer-list></footer-list>`,

  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
