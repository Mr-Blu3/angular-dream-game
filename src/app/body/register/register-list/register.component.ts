import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  template: `
  <div class="card">
    <div class="card-header"><strong>Register: Player</strong></div>
    <div class="card-block">
      <div *ngFor="let reg of register" class="form-group has-success">
        <label class="form-control-label">{{reg.name}}:</label>
        <input type="{{reg.val}}" class="form-control form-control-success">
        <div class="form-control-feedback">You are ready to go!</div>
      </div>
    </div>
  </div>`,
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {
  register: Object;

  constructor(private router: Router) { }

  ngOnInit()
  {
    let playerReg = [
      {val: 'text', name: 'First Name'},
      {val: 'text', name: 'Last Name'},
      {val: 'number', name: 'Width'},
      {val: 'number', name: 'Height'}
    ];

    let teamReg = [
      {val: 'text', name: 'Team Name'},
    ];

    this.register = (this.router.url != "/register/team") ? playerReg : teamReg;
  }
}
