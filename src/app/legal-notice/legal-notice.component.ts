import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslatePipe,
    TranslateDirective],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(private translate: TranslateService) { }
}
