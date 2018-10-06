import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.css']
})
export class DisplayItemsComponent implements OnInit {
  items = [];

  constructor(private is: ItemService) { }

  ngOnInit() {
    this.is.onItemsRetrieved((items) => {
      this.items = items;
    });
  }

}
