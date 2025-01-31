import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IncreaseWidthRepeatDirective } from '../../shared/directive/increase-width-repeat.directive';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-contact-me-section',
  standalone: true,
  imports: [IncreaseWidthRepeatDirective, FormsModule, CommonModule, TranslatePipe,
    TranslateDirective],
  templateUrl: './contact-me-section.component.html',
  styleUrls: ['./contact-me-section.component.scss', 'contact-me-section.responsive.scss']
})
export class ContactMeSectionComponent {
  isAcceptedPrivacyPolicy: boolean = false;
  isHintNecessary: boolean = false;
  imgPrivacyPolicy: string = "../../../assets/images/06_other/ppCheckDefault.svg";

  http = inject(HttpClient);

  contactData: {
    name: string;
    email: string;
    message: string;
  } = {
      name: "",
      email: "",
      message: "",
    }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php', //TODO: eigene einfügen
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(private translate: TranslateService) { }

  onSubmit(ngForm: NgForm) {
    this.isHintNecessary = true;
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            // here all what should happen after submit
            ngForm.resetForm();
            this.toggleAcceptanceOfPrivacyPolicy();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      // here all what should happen after submit (TESTMODE)
      console.log('WAS SEND IN TESTMODE => change mailTest to false to change it');
      ngForm.resetForm();
      this.toggleAcceptanceOfPrivacyPolicy();
      this.isHintNecessary = false;
    }
  }

  toggleAcceptanceOfPrivacyPolicy() {
    this.isAcceptedPrivacyPolicy = !this.isAcceptedPrivacyPolicy;
    this.isHintNecessary = true;
    if (this.imgPrivacyPolicy == "../../../assets/images/06_other/ppCheckDefault.svg") {
      this.imgPrivacyPolicy = "../../../assets/images/06_other/ppCheckChecked.svg";
    }
    else {
      this.imgPrivacyPolicy = "../../../assets/images/06_other/ppCheckDefault.svg";
    }
  }
}
