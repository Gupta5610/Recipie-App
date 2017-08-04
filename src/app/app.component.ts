import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public flag : boolean ;

  constructor() {
    this.flag = true;
  }

  toggleFlag(flag)
  {
     this.flag = flag;
  }
}
