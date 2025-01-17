import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPolaroidHighlight]',
  standalone: true
})
export class PolaroidHighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight();
  }

  private highlight() {
    if (this.el.nativeElement.lastChild.innerText == "Marco :)") {
      this.el.nativeElement.lastChild.innerText = "Marco :D";
    } else if (this.el.nativeElement.lastChild.innerText == "Marco :D") {
      this.el.nativeElement.lastChild.innerText = "Marco :)";
    }
  }
}
