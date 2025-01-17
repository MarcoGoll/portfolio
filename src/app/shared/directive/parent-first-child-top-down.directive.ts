import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appParentFirstChildTopDown]',
  standalone: true
})
export class ParentFirstChildTopDownDirective {
  interValIDSlideIn: any;
  interValIDSlideOut: any;
  prozent: number = 0;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.slideIn();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.slideOut();
  }

  private slideIn() {
    clearInterval(this.interValIDSlideOut);

    this.interValIDSlideIn = setInterval(() => {
      if (this.prozent < 100) {
        this.prozent += 10;
        this.el.nativeElement.parentElement.firstChild.style.height = this.prozent + "%";
      }
    }, 10)

  }

  private slideOut() {
    clearInterval(this.interValIDSlideIn);

    this.interValIDSlideOut = setInterval(() => {
      if (this.prozent > 0) {
        this.prozent -= 10;
        this.el.nativeElement.parentElement.firstChild.style.height = this.prozent + "%";
      }
    }, 10)
  }

}
