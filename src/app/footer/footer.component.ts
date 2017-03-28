import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-list',
  template: `
    <footer class="footer">
        <div class="container-fluid">
            <span class="text-muted">Footer</span>
        </div>
    </footer>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
