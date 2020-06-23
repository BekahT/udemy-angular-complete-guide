import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'skyblue');
  }
}
