import { Component } from '@angular/core';
import { IncreaseWidthRepeatDirective } from '../../../shared/directive/increase-width-repeat.directive';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-description-overview',
  standalone: true,
  imports: [IncreaseWidthRepeatDirective, TranslatePipe],
  templateUrl: './description-overview.component.html',
  styleUrl: './description-overview.component.scss',
})
export class DescriptionOverviewComponent {
  constructor(private translate: TranslateService) {}
}
