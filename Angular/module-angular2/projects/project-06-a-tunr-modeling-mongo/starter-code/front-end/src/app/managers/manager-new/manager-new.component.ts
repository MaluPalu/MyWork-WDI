import { Component, OnInit } from '@angular/core';
import { ManagersService } from '../managers.service';


@Component({
  selector: 'app-manager-new',
  templateUrl: './manager-new.component.html',
  styleUrls: ['./manager-new.component.css']
})
export class ManagerNewComponent implements OnInit {

  manager = {};

  constructor(private managerService: ManagersService) { }

  ngOnInit() {
  }

  createManager(manager) {
    this.managerService.createManager(this.manager).subscribe( (data) =>
    console.log(data));
  }

}
