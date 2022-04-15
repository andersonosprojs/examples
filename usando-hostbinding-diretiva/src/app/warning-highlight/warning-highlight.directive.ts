import { ElementRef, HostBinding, HostListener } from '@angular/core';
import { Directive, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWarningHighlight]'
})
export class WarningHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event): void {
    this.backgroundColor = 'orange';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event): void {
    this.backgroundColor = 'transparent';
  }
}
