import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProjectHighlight]',
  standalone: true
})
export class ProjectHighlightDirective {


  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.removeDnone();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.addDnone();
  }

  private removeDnone() {
    for (let i = 0; i < this.el.nativeElement.children.length; i++) {
      if (i == 0) {
        this.el.nativeElement.children[i].style.transform = "scale(1.2)";
        // this.el.nativeElement.children[i].style.filter = "grayscale(100%)";
      }
      if (i > 0) {
        this.el.nativeElement.children[i].classList.remove("d_none");
      }
    }
  }

  private addDnone() {
    for (let i = 0; i < this.el.nativeElement.children.length; i++) {
      if (i == 0) {
        this.el.nativeElement.children[i].style.transform = " scale(1)";
        // this.el.nativeElement.children[i].style.filter = "grayscale(0%)";
      }
      if (i > 0) {
        this.el.nativeElement.children[i].classList.add("d_none");
      }
    }
  }



}
