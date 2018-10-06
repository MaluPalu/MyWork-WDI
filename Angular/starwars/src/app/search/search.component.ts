import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  name: string = "Star Wars Character"
  results;
  searchSubject = new Subject();

  constructor(
    private ss: SearchService
  ) {}


  ngOnInit() {
    this.results = this.searchSubject
    .debounceTime(417)
    .distinctUntilChanged()
    .switchMap(name => this.ss.createAPIObservable(name));
  }

  findCharacter(name){
    this.searchSubject.next(name);
  }


}
