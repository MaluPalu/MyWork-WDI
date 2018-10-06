import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-insert-coin',
  templateUrl: './insert-coin.component.html',
  styleUrls: ['./insert-coin.component.css']
})

export class InsertCoinComponent implements OnInit {

  //coinBalance is now attatched to this class (InsertCoinComponent)
  coinBalance: number = 0;

  //implement Balanceservice into InsertCoinComponent
  constructor(private bs: BalanceService) { }

  //this makes the coinBalance available app-wide
  ngOnInit() {
    //onBalanceUpdated needs a callback, here we are setting what the
    //callback should be, which is setting the coinBalance to the
    //most updated balance
    this.bs.onBalanceUpdated(() => { // <--- that is es6 syntax for creating a function
                                    // <--- (in this case it allows us to set our callback
                                    // <--- parameter to a function) ex: () =>
      this.coinBalance = this.bs.getBalance();
    });
  }

  //InsertCoinComponent
  addBalance(amount: number){
    this.bs.addBalance(amount);
  }


}
