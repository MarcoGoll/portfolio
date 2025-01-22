import { Component } from '@angular/core';
import { IncreaseWidthRepeatDirective } from '../../shared/directive/increase-width-repeat.directive';

@Component({
  selector: 'app-contact-me-section',
  standalone: true,
  imports: [IncreaseWidthRepeatDirective],
  templateUrl: './contact-me-section.component.html',
  styleUrl: './contact-me-section.component.scss'
})
export class ContactMeSectionComponent {

}
