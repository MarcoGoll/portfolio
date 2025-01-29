import { Component } from '@angular/core';
import { HeroHighlightDirective } from '../../shared/directive/hero-highlight.directive';
import { PolaroidHighlightDirective } from '../../shared/directive/polaroid-highlight.directive';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [HeroHighlightDirective, PolaroidHighlightDirective],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss', 'hero-section.responsive.scss']
})
export class HeroSectionComponent {

}
