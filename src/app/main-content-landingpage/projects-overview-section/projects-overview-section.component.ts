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
    id: "join",
    index: 0,
    projectImg: "./assets/images/laptop.png",
    name: "Join",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    implementationDetails: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    duration: "5 Weeks",
    techniques: [{ techniqueImg: "", technique: "" }]
  },
  {
    id: "sharkie",
    index: 0,
    projectImg: "./assets/images/sharkie.png",
    name: "Sharkie",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    implementationDetails: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    duration: "4 Weeks",
    techniques: [{ techniqueImg: "", technique: "" }]
  },
  {
    id: "pokedex",
    index: 0,
    projectImg: "./assets/images/pokedex.png",
    name: "Pokedex",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    implementationDetails: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    duration: "2 Weeks",
    techniques: [{ techniqueImg: "", technique: "" }]
  }
  ];
}
