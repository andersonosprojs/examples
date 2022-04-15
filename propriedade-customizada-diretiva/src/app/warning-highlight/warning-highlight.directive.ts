import { ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { Directive, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWarningHighlight]'
})
export class WarningHighlightDirective implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  @Input() defaultColor: string = 'transparent';
  // tslint:disable-next-line:no-inferrable-types
  @Input() highlightColor: string = 'orange';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event): void {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event): void {
    this.backgroundColor = this.defaultColor;
  }
}
