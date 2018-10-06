import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfoPanelComponent } from './info-panel/info-panel.component';
import { TurretComponent } from './internal-defenses/turret/turret.component';

const routes: Routes = [
    {
        path: 'info',
        component: InfoPanelComponent
    }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
