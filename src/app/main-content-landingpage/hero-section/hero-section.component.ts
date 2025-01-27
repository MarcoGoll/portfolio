import { Component } from '@angular/core';
import { HeroHighlightDirective } from '../../shared/directive/hero-highlight.directive';
import { PolaroidHighlightDirective } from '../../shared/directive/polaroid-highlight.directive';
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [HeroHighlightDirective, PolaroidHighlightDirective, HeaderComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}
