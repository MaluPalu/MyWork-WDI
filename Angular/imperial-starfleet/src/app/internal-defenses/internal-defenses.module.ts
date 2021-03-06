import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeathSquareComponent } from './death-square/death-square.component';
import { TurretComponent } from './turret/turret.component';
import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  // declares what components to use on the front-end and allows that usage
  declarations: [
    DeathSquareComponent,
    TurretComponent,
    LaserCannonComponent
  ],
  exports: [
    DeathSquareComponent
  ]
})
export class InternalDefensesModule { }
