import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';


@Component({
  selector: 'app-code-insertion',
  templateUrl: './code-insertion.component.html',
  styleUrls: ['./code-insertion.component.css']
})
export class CodeInsertionComponent implements OnInit {
  items = [];
  inputCode: string = '';
  selectedSoda;

  constructor(private is: ItemService) { }

  ngOnInit() {
    this.is.onItemsRetrieved((items) => {
      this.items = items;
    });
  }

  findMatchingSoda(inputCode) {
    this.selectedSoda = this.items.find(item => item.code == inputCode)
    this.is.setSelectedItem(this.selectedSoda);
  }

}
