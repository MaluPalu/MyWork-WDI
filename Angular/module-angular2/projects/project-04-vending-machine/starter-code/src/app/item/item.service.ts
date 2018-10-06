import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ItemService {
  private apiUrl = 'http://localhost:3000/items';
  private selectedItem: any;
  constructor(private http: Http) { }

  //map through all those items
  get(): Observable<Response> {
    return this.http.get(this.apiUrl)
    .map((res:Response) => res.json());
  }

  //subscribes to the get() Observable when an item has been got
  onItemsRetrieved(callback: any): void {
    this.get().subscribe(callback);

  }
  //returns the selectedItem
  getSelectedItem(): any {
    return this.selectedItem;
  }

  setSelectedItem(item: any): void {
    this.selectedItem = item;
  }

  //takes JSON from db of the selectedItem and maps through each of it's properties
  //responding with an updated version
  put(body: any): Observable<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const updateUrl = `${this.apiUrl}/${this.selectedItem.id}`;
    return this.http.put(updateUrl, JSON.stringify(this.selectedItem), { headers })
    .map((res:Response) => res.json());
  }

  //typescript => void mean that it is running a function but that it is NOT returning a value
  dispenseItem(callback: any): void {
    this.selectedItem.remaining -= 1;
    this.put(this.selectedItem).subscribe(callback);
  }

  //checking the selectedItem and comparing it to the currentBalance then returns a boolean
  hasSufficientBalance(currentBalance: number): boolean {
    if(!this.selectedItem) return false;
    const hasSufficientBalance = (currentBalance >= this.selectedItem.cost);
    return hasSufficientBalance;
  }

  //returns a boolean based off of how many of that selectedItem are remaining
  //and if its above 0
  hasRemaining(): boolean {
    return this.selectedItem && this.selectedItem.remaining > 0;
  }
}
