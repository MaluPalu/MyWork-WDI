import { Component, OnInit } from '@angular/core';
import { ManagersService } from '../managers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-managers-show',
  templateUrl: './managers-show.component.html',
  styleUrls: ['./managers-show.component.css']
})
export class ManagersShowComponent implements OnInit {

  oneManager = <any>{};

  constructor(
  	private route : ActivatedRoute,
  	private artistsService : ManagersService
  ) { }

  ngOnInit() {
  	this.route.params.forEach( param => {
  		this.artistsService.getOneManager(param.id)
  		.subscribe(response => {
  			console.log(response.json());
  			this.oneManager = response.json();
  		});
  	});
  }
  
}
