import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-sword',
  templateUrl: './master-sword.component.html',
  styleUrls: ['./master-sword.component.css']
})
export class MasterSwordComponent implements OnInit {

  proclamation: string;
  constructor() {
  this.proclamation = "Behold! The Master Sword...";
  }

  ngOnInit() {
  }

}
