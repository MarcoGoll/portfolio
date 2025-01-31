import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    TranslatePipe,
    TranslateDirective
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss', 'footer.responsive.scss']
})
export class FooterComponent {
  constructor(private translate: TranslateService) { }
}
