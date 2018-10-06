import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MasterSwordComponent } from './master-sword/master-sword.component';
import { MasterShieldComponent } from './master-shield/master-shield.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterSwordComponent,
    MasterShieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
