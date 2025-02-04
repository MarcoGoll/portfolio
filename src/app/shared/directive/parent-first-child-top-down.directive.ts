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

  /**
  * Handles the mouse enter event.
  */
  @HostListener('mouseenter') onMouseEnter() {
    this.slideIn();
  }

  /**
  * Handles the mouse leave event.
  */
  @HostListener('mouseleave') onMouseLeave() {
    this.slideOut();
  }

  /**
  * Initiates a sliding-in animation by increasing the height of the element.
  */
  private slideIn() {
    clearInterval(this.interValIDSlideOut);

    this.interValIDSlideIn = setInterval(() => {
      if (this.prozent < 100) {
        this.prozent += 10;
        this.el.nativeElement.parentElement.firstChild.style.height = this.prozent + "%";
      }
    }, 20)

  }

  /**
  * Initiates a sliding-in animation by increasing the height of the element.
  */
  private slideOut() {
    clearInterval(this.interValIDSlideIn);
    this.interValIDSlideOut = setInterval(() => {
      if (this.prozent > 0) {
        this.prozent -= 10;
        this.el.nativeElement.parentElement.firstChild.style.height = this.prozent + "%";
      }
    }, 20)
  }

}
