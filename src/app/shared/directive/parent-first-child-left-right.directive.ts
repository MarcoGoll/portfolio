import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParentFirstChildLeftRight]',
  standalone: true
})
export class ParentFirstChildLeftRightDirective {

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
        this.el.nativeElement.parentElement.firstChild.style.width = this.prozent + "%";
      }
    }, 20)

  }

  private slideOut() {
    clearInterval(this.interValIDSlideIn);

    this.interValIDSlideOut = setInterval(() => {
      if (this.prozent > 0) {
        this.prozent -= 10;
        this.el.nativeElement.parentElement.firstChild.style.width = this.prozent + "%";
      }
    }, 20)
  }


}
