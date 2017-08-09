import { Directive, HostBinding , HostListener } from '@angular/core';

@Directive({
  selector: '[appDrowpdown]'
})
export class DrowpdownDirectiveDirective {
  @HostBinding('class.open') isApplied = false; 

  @HostListener('click') onButtonClickEvent()
  {
    this.isApplied = !this.isApplied;
  }

  constructor() { }

}
