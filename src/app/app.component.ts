import { Component } from '@angular/core';
import {FavoriteChangedEventArgs} from './favorite/favorite.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  post = {
    title : "Title",
    star : true
  }
  onFavoriteChanged(star : FavoriteChangedEventArgs){
    console.log("Favorite Changed :", star);
  }
}