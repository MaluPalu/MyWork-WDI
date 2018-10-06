import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsComponent } from './songs.component';
import { SongIndexComponent } from './song-index/song-index.component';

const aboutRoutes: Routes = [
    {
        path: 'songs',
        component: SongsComponent,
        children: [ //create the sub sections (children) for this route
            {
                path: '',
                component: SongIndexComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(aboutRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SongsRoutingModule { }
