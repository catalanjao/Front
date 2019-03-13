import { Component, Output, Input, EventEmitter } from '@angular/core';

/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {
  text: string;
  @Input('student') stundent:any;
  @Output('click-card') Card = new EventEmitter<any>();
  
  constructor() {
    console.log('Hello CardComponent Component');
    this.text = 'Hello World';
  }

  clickcard(){
    this.Card.emit(this.stundent);
  }
}
