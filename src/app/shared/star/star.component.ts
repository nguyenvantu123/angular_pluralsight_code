import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({selector: 'app-star', templateUrl: './star.component.html', styleUrls: ['./star.component.scss']})
export class StarComponent implements OnChanges {
  // tslint:disable-next-line:typedef-whitespace
  @Input()rating : number;
  // tslint:disable-next-line:typedef-whitespace
  starWith : number;
  constructor() {}
  // tslint:disable-next-line:typedef-whitespace
  @Output()ratingClicked : EventEmitter < string > = new EventEmitter < string > ();
  // tslint:disable-next-line:typedef-whitespace
  ngOnChanges() : void {
    this.starWith = this.rating * 86 / 5;
  }
  // tslint:disable-next-line:typedef-whitespace
  onClick() : void {
    this
      .ratingClicked
      .emit(`The rating ${this.rating} was clicked`);
  }
}
