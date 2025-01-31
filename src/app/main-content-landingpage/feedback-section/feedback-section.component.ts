import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'app-feedback-section',
  standalone: true,
  imports: [TranslatePipe,
    TranslateDirective],
  templateUrl: './feedback-section.component.html',
  styleUrls: ['./feedback-section.component.scss', 'feedback-section.resonsive.scss']
})
export class FeedbackSectionComponent {
  constructor(private translate: TranslateService) { }
}
