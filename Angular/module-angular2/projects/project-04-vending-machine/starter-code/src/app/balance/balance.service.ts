
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BalanceService {
  //caches the balance
  private balance: number = 0;
  //subject: tracks the balance, which is a number.
  private subject: Subject<number> = new Subject<number>();

  constructor() { }

  private updateSubject(): void {
    this.subject.next(this.balance);
  }

  //sets the balance and updates the subject
  setBalance(amount): void {
    this.balance = amount;
    this.updateSubject();
  }

  getBalance(): number {
    return this.balance;
  }

  //adds amount to the balance and updates the subject
  addBalance(amount): void {
    this.balance += amount;
    this.updateSubject();
  }

  //subtracts amount from the balance and updates the subject
  deductBalance(amount): void {
    this.balance -= amount;
    this.updateSubject();
  }

  //whenever the balance is updated, subscribe to the observable
  onBalanceUpdated(callback): void {
    this.subject.asObservable().subscribe(callback);
  }
}
