import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostListenerHighlight]'
})
export class HostListenerHighlightDirective implements OnInit {  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {}

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'mediumpurple');
  }

  @HostListener('mouseleave') mouseexit(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
}
