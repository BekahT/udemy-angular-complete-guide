import { Directive, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHostBindingHighlight]'
})
export class HostBindingHighlightDirective implements OnInit {  
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {}

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseexit(eventData: Event) {
    this.backgroundColor = 'transparent';
  }

}
