import { Directive, OnInit, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appUserInputHighlight]'
})
export class UserInputHighlightDirective implements OnInit {  
  constructor() { }
  @Input() defaultColor: string;
  @Input() highlightColor: string;

  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit() {
    // Could set the default color here 
    // and define the colors for the @Inputs() if they were not already defined in the component using this directive
    // this.backgroundColor = this.defaultColor;
  }  

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseexit() {
    this.backgroundColor = this.defaultColor;
  }
}
