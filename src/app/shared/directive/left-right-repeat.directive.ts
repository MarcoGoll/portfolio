import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLeftRightRepeat]',
  standalone: true
})
export class LeftRightRepeatDirective {
  width: number = 0;
  isIncreaseDone = false;

  constructor(private el: ElementRef) {
    this.slide();
  }

  private slide() {
    setInterval(() => {
      if (this.width < 320 && !(this.isIncreaseDone)) { //TODO: die 320 bekomm ich auch wenn ich die width des Child abfrage <= so ändern, dann kann ich das global benutzen
        this.width += 10;
        this.el.nativeElement.style.width = this.width + "px";
        if (this.width == 320) {
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
