import { Component, inject } from '@angular/core';
import { DescriptionOverviewComponent } from './description-overview/description-overview.component';
import { ProjektOverviewComponent } from './projekt-overview/projekt-overview.component';
import { Project } from '../../shared/interfaces/project';
import { ProjectDataService } from '../../shared/services/project-data.service';


@Component({
  selector: 'app-projects-overview-section',
  standalone: true,
  imports: [
    DescriptionOverviewComponent,
    ProjektOverviewComponent
  ],
  templateUrl: './projects-overview-section.component.html',
  styleUrls: ['./projects-overview-section.component.scss', './projects-overview-section.responsive.scss']
})
export class ProjectsOverviewSectionComponent {

  projectData = inject(ProjectDataService);

}
