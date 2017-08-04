import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() flag : EventEmitter<boolean> = new EventEmitter<boolean>();
  
  result : boolean ;

  constructor() {
    this.result = true;
   }

  ngOnInit() {
  }

  OnToggleflag()
  {
       this.result = !this.result;
       this.flag.emit(this.result);
  }

}
