import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[appDangerHighLight]'
})

export class DangerHighLightDirective implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    (<HTMLElement>this.elementRef.nativeElement).style.backgroundColor = 'lightcoral';
  }
}
