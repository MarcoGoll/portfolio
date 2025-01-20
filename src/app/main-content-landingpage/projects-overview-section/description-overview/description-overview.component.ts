import { Component } from '@angular/core';
import { IncreaseWidthRepeatDirective } from '../../../shared/directive/increase-width-repeat.directive';

@Component({
  selector: 'app-description-overview',
  standalone: true,
  imports: [IncreaseWidthRepeatDirective],
  templateUrl: './description-overview.component.html',
  styleUrl: './description-overview.component.scss'
})
export class DescriptionOverviewComponent {

}
