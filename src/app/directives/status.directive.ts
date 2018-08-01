import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStatus]'
})
export class StatusDirective {
  @Input() defaultColor: string;
  @Input('appStatus') color: string;

  @HostListener('document:mouseover')
  onMouseEnter() {
    this.highlight(this.color || this.defaultColor);
  }

  constructor(private el: ElementRef) {
   }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
