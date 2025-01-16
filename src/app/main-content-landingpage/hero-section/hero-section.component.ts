import { Component } from '@angular/core';
import { HeroHighlightDirective } from '../../shared/directive/hero-highlight.directive';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [HeroHighlightDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}
