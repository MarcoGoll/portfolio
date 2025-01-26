import { Component, inject } from '@angular/core';
import { ProjectDataService } from '../shared/services/project-data.service';
import { IncreaseWidthRepeatDirective } from '../shared/directive/increase-width-repeat.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-content-detailpage',
  standalone: true,
  imports: [IncreaseWidthRepeatDirective, RouterLink],
  templateUrl: './main-content-detailpage.component.html',
  styleUrl: './main-content-detailpage.component.scss'
})
export class MainContentDetailpageComponent {
  projectData = inject(ProjectDataService);
}
