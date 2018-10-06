import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SongIndexComponent } from './song-index/song-index.component';
import { SongsComponent } from './songs.component';
import { SongsService } from './songs.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],

  declarations: [
    SongIndexComponent,
    SongsComponent
  ],

  providers: [
    SongsService
  ]
})

export class SongsModule { }
