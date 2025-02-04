import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProjectHighlight]',
  standalone: true
})
export class ProjectHighlightDirective {


  constructor(private el: ElementRef) { }

  /**
  * Handles the mouse enter event.
  */
  @HostListener('mouseenter') onMouseEnter() {
    if (window.innerWidth > 1023) {
      this.removeDnone();
    }
  }

  /**
  * Handles the mouse leave event.
  */
  @HostListener('mouseleave') onMouseLeave() {
    this.addDnone();
  }

  /**
  * Removes the "d_none" class from child elements and applies a transform effect to the first child.
  */
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

  /**
  * Adds the "d_none" class to child elements and resets the transform effect on the first child.
  */
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
