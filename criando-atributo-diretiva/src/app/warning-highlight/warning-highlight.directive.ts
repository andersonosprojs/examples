import { ElementRef, HostListener } from '@angular/core';
import { Directive, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWarningHighlight]'
})
export class WarningHighlightDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'orange');
  }
}
