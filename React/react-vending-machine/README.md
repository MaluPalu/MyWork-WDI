# React Vending Machine

Hot off the heels of last week's Angular vending machine, we are going to complete the same project in React. This will be a useful (although probably frustrating!) exercise in seeing the similarities and differences between Angular and React.

## Features

As a professional software engineer, you'll most likely be working off of stories. We have split the task of creating our vending machine into three user stories.

### Watch: Insert Coin

_As a vendor, I want a vending machine that accepts coins so I can collect money from the customer._

- The vending machine will accept valid coins (nickels, dimes, and quarters). Coins are represented by three buttons.
- When a valid coin is inserted (button pressed) the value of the coin will be added to the current balance, and the machine's display will update.
- When there are no coins inserted, the machine will display INSERT COIN.

### Code Together: Display Items

_As a vendor, I want customers to see what they can buy so I can give them an incentive to put money in the machine._

- The machine shows a list of items with their prices and remaining inventory.
- The list of items is populated from `items`, the array of objects at the top of the `App.js` file.

### Code Together: Select Item

_As a vendor, I want customers to be able to select an item so I know how much money to charge them and which item I should dispense._

- The machine includes a text input that accepts item codes.
- The text input should not accept more than two characters.
- The machine responds with "{item.name} selected" and selects an item if a user enters a code that matches that item's code.

### Pair Lab: Dispense Item

_As a customer, I want to be told whether my item has been dispensed so I can know whether my transaction has been completed._  

- When pressed, a button labeled "Dispense" dispenses the selected item if there is enough current balance and the selected item has remaining stock.
- The machine responds with "No Item Selected" if the user has not yet selected an item.
- The machine responds with "Insufficient Balance" or "No Inventory Remaining," respectively, if there is an error and cancels dispensing the item.
- The machine responds with a success message (of your choice) when the item is successfully dispensed.
- The machine deducts the item cost after successfully dispensing item.
