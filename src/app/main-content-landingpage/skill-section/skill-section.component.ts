import { Component } from '@angular/core';
import { IncreaseWidthRepeatDirective } from '../../shared/directive/increase-width-repeat.directive';

@Component({
  selector: 'app-skill-section',
  standalone: true,
  imports: [IncreaseWidthRepeatDirective],
  templateUrl: './skill-section.component.html',
  styleUrl: './skill-section.component.scss'
})
export class SkillSectionComponent {

}
