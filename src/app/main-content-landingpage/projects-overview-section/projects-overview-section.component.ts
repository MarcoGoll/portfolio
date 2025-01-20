import { Component } from '@angular/core';
import { DescriptionOverviewComponent } from './description-overview/description-overview.component';
import { ProjektOverviewComponent } from './projekt-overview/projekt-overview.component';
import { Project } from '../../shared/interfaces/project';


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

  projects: Project[] = [{
    projectImg: "",
    name: "Join",
    description: "",
    implementationDetails: "",
    duration: "",
    techniques: [{ techniqueImg: "", technique: "" }]
  },
  {
    projectImg: "",
    name: "Sharkie",
    description: "",
    implementationDetails: "",
    duration: "",
    techniques: [{ techniqueImg: "", technique: "" }]
  },
  {
    projectImg: "",
    name: "Pokemon",
    description: "",
    implementationDetails: "",
    duration: "",
    techniques: [{ techniqueImg: "", technique: "" }]
  }
  ];
}
