import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../../../shared/services/restApi.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {
  register: Object;

  constructor(private restApiService: RestApiService, private router: Router) { }

  ngOnInit() {
  }

  get() {
    return this.register = (this.router.url != '/register/team') ? this.restApiService.getListOfPlayers() : this.restApiService.getListOfTeam();
  }
}
