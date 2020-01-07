import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {SummaryPipe} from './summary.pipe';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoursesComponent } from './courses.component';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FontAwesomeModule ],
  declarations: [ AppComponent, CoursesComponent, SummaryPipe, FavoriteComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }