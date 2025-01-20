import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIncreaseWidthRepeat]',
  standalone: true
})
export class IncreaseWidthRepeatDirective {

  width: number = 0;
  isIncreaseDone = false;

  constructor(private el: ElementRef) {
    this.slide();
  }

  private slide() {
    setInterval(() => {
      if (this.width < this.el.nativeElement.firstChild.width && !(this.isIncreaseDone)) {
        this.width += 10;
        this.el.nativeElement.style.width = this.width + "px";
        if (this.width == this.el.nativeElement.firstChild.width) {
          setTimeout(() => {
            this.isIncreaseDone = true
          }, 2000);
        }
      }
      if (this.width > 0 && this.isIncreaseDone) {
        this.width -= 10;
        this.el.nativeElement.style.width = this.width + "px";
        if (this.width == 0) {
          setTimeout(() => {
            this.isIncreaseDone = false
          }, 2000);
        }
      }
    }, 10)

  }

}
