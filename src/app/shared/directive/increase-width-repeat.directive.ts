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

  /**
  * Controls the sliding animation of the element.
  * 
  * This method uses a `setInterval` to gradually increase or decrease the width of the element. 
  * It checks if the width is less than the width of the first child and increases it in steps of 10 pixels until the target width is reached. 
  * After that, it waits for 2 seconds before starting to decrease the width again, until the width reaches 0.
  * It uses the `isIncreaseDone` flag to alternate between increasing and decreasing the width.
  */
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
