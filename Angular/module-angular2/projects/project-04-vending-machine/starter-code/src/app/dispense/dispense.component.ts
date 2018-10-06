import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { BalanceService } from '../balance/balance.service';


@Component({
  selector: 'app-dispense',
  templateUrl: './dispense.component.html',
  styleUrls: ['./dispense.component.css']
})
export class DispenseComponent implements OnInit {
  message: string = '';
  selectedSoda;


  constructor(private is: ItemService, private bs: BalanceService) { }

  ngOnInit() {
  }

  dispenseSoda() {
    //setting currentBalance to the getBalance() service function in BalanceService
    //which returns the balance
   let currentBalance = this.bs.getBalance();
    //setting selectedItem to getSelectedItem() service function in ItemService
    //which returns the selectedItem
   let selectedItem = this.is.getSelectedItem();


   if(selectedItem) {
     //using the hasSufficientBalance() from ItemService which takes in
     //currentBalance in order to check
     if(this.is.hasSufficientBalance(currentBalance)) {
       //using the hasRemaining() function from ItemService to check if the
       //remaining property has a value greater than 0
       if(this.is.hasRemaining()) {
         //using the dispenseItem() function from the ItemService to dispense
         //which deducts the remaining value by 1
         this.is.dispenseItem(item => {
           //using the deductBalance() function in the BalanceService to deduct
           //by the cost value of selected item
           this.bs.deductBalance(item.cost);
         });
         this.message = "Dispensed " + selectedItem.name + "! You have "
       } else {
         this.message = "There are not enough items remaining.";
       }
     } else {
       this.message = "You did not insert enough money.";
     }
   } else {
     this.message = "No item was selected.";
   }

}

}
