import { Component } from '@angular/core';
import { DescriptionOverviewComponent } from './description-overview/description-overview.component';
import { ProjektOverviewComponent } from './projekt-overview/projekt-overview.component';


@Component({
  selector: 'app-projects-overview-section',
  standalone: true,
  imports: [
    DescriptionOverviewComponent,
    ProjektOverviewComponent
  ],
  templateUrl: './projects-overview-section.component.html',
  styleUrl: './projects-overview-section.component.scss'
})
export class ProjectsOverviewSectionComponent {

}
