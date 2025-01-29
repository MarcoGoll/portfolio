import { Component } from '@angular/core';
import { IncreaseWidthRepeatDirective } from '../../shared/directive/increase-width-repeat.directive';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [IncreaseWidthRepeatDirective, TranslatePipe,
    TranslateDirective],
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss', './about-me-section.responsive.scss']
})
export class AboutMeSectionComponent {
  constructor(private translate: TranslateService) { }
}
