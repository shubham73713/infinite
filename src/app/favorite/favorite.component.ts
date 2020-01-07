import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { faStar as starFilled } from '@fortawesome/free-solid-svg-icons';
import { faStar as starEmpty } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  
})
export class FavoriteComponent  {
starFill = starFilled;
starEmp = starEmpty;
 @Input('star') stars : boolean;
 @Output('change') click = new EventEmitter();
onClickStar(){
this.stars = !this.stars;
console.log(this.stars);
this.click.emit({newValue :this.stars});
}
}
export interface FavoriteChangedEventArgs{
  newValue : boolean;
}
