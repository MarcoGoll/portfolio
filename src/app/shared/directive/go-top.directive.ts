import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGoTop]',
  standalone: true
})
export class GoTopDirective {

  constructor(private el: ElementRef) { }

  /**
  * Initialise scrollFunction() at window event onscroll
  */
  @HostListener('window:scroll', ['$event']) onScroll() {
    this.scrollFunction();
  }

  /**
  * When the user scrolls down 20px from the top of the document, show the button
  */
  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.el.nativeElement.style.display = "block";
    } else {
      this.el.nativeElement.style.display = "none";
    }
  }
}
