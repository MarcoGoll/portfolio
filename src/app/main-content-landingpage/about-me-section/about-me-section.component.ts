import { Component } from '@angular/core';
import { LeftRightRepeatDirective } from '../../shared/directive/left-right-repeat.directive';

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [LeftRightRepeatDirective],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {

}
