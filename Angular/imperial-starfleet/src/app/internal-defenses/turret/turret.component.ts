import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-turret',
  templateUrl: './turret.component.html',
  styleUrls: ['./turret.component.css']
})
export class TurretComponent implements OnInit {


  constructor(private http: Http) {

  }

  ngOnInit() {
  }
  turretInfo() {
  this.http.get('https://localhost:4200/info');
}

}
