import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProjectHighlight]',
  standalone: true
})
export class ProjectHighlightDirective {


  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (window.innerWidth > 1023) {
      this.removeDnone();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.addDnone();
  }

  private removeDnone() {
    for (let i = 0; i < this.el.nativeElement.children.length; i++) {
      if (i == 0) {
        this.el.nativeElement.children[i].children[0].style.transform = "scale(1.1)";
      }
      if (i > 0) {
        this.el.nativeElement.children[i].classList.remove("d_none");
      }
    }
  }

  private addDnone() {
    for (let i = 0; i < this.el.nativeElement.children.length; i++) {
      if (i == 0) {
        this.el.nativeElement.children[i].children[0].style.transform = " scale(1)";
      }
      if (i > 0) {
        this.el.nativeElement.children[i].classList.add("d_none");
      }
    }
  }



}
