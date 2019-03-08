import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-holamundo',
  templateUrl: './holamundo.component.html',
  styleUrls: ['./holamundo.component.css']
})
export class HolamundoComponent implements OnInit {
@Input() message: string;
@Output() messageReturn = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.messageReturn.emit(this.message);
  }

  Clicklike(message : string){
    this.messageReturn.emit('Le guo a dar like');
    }
}
