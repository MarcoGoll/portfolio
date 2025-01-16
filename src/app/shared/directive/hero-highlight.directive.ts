import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeroHighlight]',
  standalone: true
})
export class HeroHighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#f7c518');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
    if (this.hasLowerCase(this.el.nativeElement.innerText)) {
      this.el.nativeElement.innerText = this.el.nativeElement.innerText.toUpperCase();
    } else {
      this.el.nativeElement.innerText = this.el.nativeElement.innerText.toLowerCase();
    }
  }

  hasLowerCase(str: string) {
    return str.toUpperCase() != str;
  }

}
