import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-shield',
  templateUrl: './master-shield.component.html',
  styleUrls: ['./master-shield.component.css']
})
export class MasterShieldComponent implements OnInit {

  proclamation: string;
  constructor() {
  this.proclamation = "Behold! The Hylian Shield..."
  }

  ngOnInit() {
  }

}
