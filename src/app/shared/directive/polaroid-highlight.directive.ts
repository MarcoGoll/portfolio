import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPolaroidHighlight]',
  standalone: true
})
export class PolaroidHighlightDirective {

  constructor(private el: ElementRef) { }

  /**
  * Handles the mouse enter event.
  */
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight();
  }

  /**
  * Handles the mouse leave event.
  */
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight();
  }

  /**
 * Toggles the text of the last child element between two states.
 */
  private highlight() {
    if (this.el.nativeElement.lastChild.innerText == "Marco :)") {
      this.el.nativeElement.lastChild.innerText = "Marco :D";
    } else if (this.el.nativeElement.lastChild.innerText == "Marco :D") {
      this.el.nativeElement.lastChild.innerText = "Marco :)";
    }
  }
}
