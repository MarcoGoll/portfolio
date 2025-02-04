import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeroHighlight]',
  standalone: true
})
export class HeroHighlightDirective {

  constructor(private el: ElementRef) { }

  /**
  * Handles the mouse enter event.
  */
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#f7c518');
  }

  /**
  * Handles the mouse leave event.
  */
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  /**
  * Highlights the host element by changing its text color and toggling its case.
  * 
  * @param {string} color - The color to apply to the text of the host element.
  */
  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
    if (this.hasLowerCase(this.el.nativeElement.innerText)) {
      this.el.nativeElement.innerText = this.el.nativeElement.innerText.toUpperCase();
    } else {
      this.el.nativeElement.innerText = this.el.nativeElement.innerText.toLowerCase();
    }
  }

  /**
  * Checks if the provided string contains any lowercase letters.
  * 
  * @param {string} str - The string to check for lowercase letters.
  * @returns {boolean} `true` if the string contains lowercase letters, `false` otherwise.
  */
  private hasLowerCase(str: string) {
    return str.toUpperCase() != str;
  }

}
