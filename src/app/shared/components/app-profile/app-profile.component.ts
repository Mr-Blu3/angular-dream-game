import {Component, Input} from '@angular/core';
import {Message} from "primeng/components/common/api";

@Component({
  selector: 'app-profile',
  template: `
  <div *ngIf="profile != undefined" class="card" style="max-width: 30%; margin: auto; background: #012345">
    <div class="card-header">{{header}}</div>
    <div class="card-block">
      <ul class="list-group list-group-flush">
        <li *ngFor="let pro of profile | key" class="list-group-item"> {{ pro.key }} : &nbsp;<strong> {{ pro.value }} </strong></li>
        <li class="list-group-item"><button class="btn btn-secondary" (click)="showInfoProfile(header)">Read More</button> </li>
      </ul>
    </div>
    <div class="text-white" *ngIf="proInfo">{{proInfo}}</div>
  </div>
`,
  styleUrls: ['./app-profile.component.scss'],
})
export class AppProfileComponent{

  @Input() profile: Object[];
  @Input() header: string;

  private proInfo: string;

  constructor() { }

  private showInfoProfile(proInfo: string)
  {
    this.proInfo = proInfo;
  }

}
