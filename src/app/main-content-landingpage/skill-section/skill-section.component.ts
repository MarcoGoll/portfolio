import { Component } from '@angular/core';
import { IncreaseWidthRepeatDirective } from '../../shared/directive/increase-width-repeat.directive';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'app-skill-section',
  standalone: true,
  imports: [IncreaseWidthRepeatDirective, TranslatePipe,
    TranslateDirective],
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.scss', './skill-section.responsive.scss']
})
export class SkillSectionComponent {
  constructor(private translate: TranslateService) { }
}
