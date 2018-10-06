import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ManagerIndexComponent } from './manager-index/manager-index.component';
import { ManagersComponent } from './managers.component';
import { ManagersService } from './managers.service';
import { ManagerNewComponent } from './manager-new/manager-new.component';
import { ManagerEditComponent } from './manager-edit/manager-edit.component';
import { ManagersShowComponent } from './managers-show/managers-show.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    ManagersComponent,
    ManagerIndexComponent,
    ManagerNewComponent,
    ManagerEditComponent,
    ManagersShowComponent
  ],
  providers: [
    ManagersService
  ]
})
export class ManagersModule { }
