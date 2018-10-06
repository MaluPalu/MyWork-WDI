import { Http } from '@angular/http'
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  createAPIObservable(name) {
    return this.http.get(
      'https://swapi.co/api/people/?search=' + name
    ).map(response => response.json().results );
  }
}

AJAX
//promise
things to do when endpoint is hit

.then(do stuff)

.catch(err)
