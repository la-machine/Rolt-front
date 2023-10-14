import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showMenu = false;

  @Output() homeEvent = new EventEmitter();
  @Output() serviceEvent = new EventEmitter();
  @Output() aboutusEvent = new EventEmitter();
  @Output() contactusEvent = new EventEmitter();
  @Output() loginEvent = new EventEmitter();

  constructor(){}
 
}
