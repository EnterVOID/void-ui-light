import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatchesComponent } from './matches/matches.component';
import { CharactersComponent } from './characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchesComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
