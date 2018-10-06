import { Component, OnInit } from '@angular/core';

import { ManagersService } from '../managers.service';

@Component({
  selector: 'app-manager-index',
  templateUrl: './manager-index.component.html',
  styleUrls: ['./manager-index.component.css']
})
export class ManagerIndexComponent implements OnInit {

	allManagers = [];

  deleteManager(deletedManager) {
    this.managerService.deleteManager(deletedManager)
    .subscribe(response => {
      let managerIndex = this.allManagers.indexOf(deletedManager);
      this.allManagers.splice(managerIndex, 1);
    });
  }

  constructor(private managerService: ManagersService) { }

  ngOnInit() {
    this.managerService.getAllManagers()
  		.subscribe(response => {
				console.log(response.json());
				this.allManagers = response.json()
			});
  }

}
