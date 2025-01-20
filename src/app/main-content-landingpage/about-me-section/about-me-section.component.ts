import { Component } from '@angular/core';
import { IncreaseWidthRepeatDirective } from '../../shared/directive/increase-width-repeat.directive';

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [IncreaseWidthRepeatDirective],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {

}
