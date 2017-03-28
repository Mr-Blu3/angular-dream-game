import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-list',
  template: `
<nav class="navbar navbar-fixed-top navbar-dark bg-inverse mb-5">
  <div class="navbar-toggleable-xs navbar-collapse">
    <div class="col align-middle">
      <div class="float-left m-1">
        <h4 class="m-0"><a class="text-white" routerLink="game-stats">Game Stats</a></h4>
      </div>
      <div ngbDropdown class="float-right">
        <button class="btn btn-secondary" id="dropdownMenu1" ngbDropdownToggle>Meny</button>
        <div class="dropdown-menu dropdown-menu-right text-center" style="max-width: 160px" aria-labelledby="dropdownMenu1">
          <button class="dropdown-item text-truncate" routerLinkActive="bg-faded"><a routerLink="/">Game Board</a></button>
          <button class="dropdown-item text-truncate" routerLinkActive="bg-faded"><a routerLink="teams">Teams</a></button>
          <button class="dropdown-item text-truncate" routerLinkActive="bg-faded"><a routerLink="players">Players</a></button>
        </div>
      </div>
    </div>
  </div>
</nav>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
