import { Component } from '@angular/core';
import { IncreaseWidthRepeatDirective } from '../../shared/directive/increase-width-repeat.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me-section',
  standalone: true,
  imports: [IncreaseWidthRepeatDirective, FormsModule],
  templateUrl: './contact-me-section.component.html',
  styleUrl: './contact-me-section.component.scss'
})
export class ContactMeSectionComponent {

  contactData: {
    name: string;
    email: string;
    message: string;
  } = {
      name: "",
      email: "",
      message: "",
    }

  onSubmit() {
    console.log(this.contactData);
  }
}
