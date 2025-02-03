import { Component, Input } from '@angular/core';
import { Project } from '../../../shared/interfaces/project';
import { ProjectHighlightDirective } from '../../../shared/directive/project-highlight.directive';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projekt-overview',
  standalone: true,
  imports: [
    ProjectHighlightDirective,
    RouterLink,
    CommonModule],
  templateUrl: './projekt-overview.component.html',
  styleUrls: ['./projekt-overview.component.scss', './projekt-overview.responsive.scss']
})
export class ProjektOverviewComponent {

  @Input("project") project: Project =
    {
      //DEFAULT VALUE
      id: "",
      index: 0,
      projectImg: "",
      name: "",
      description: "",
      implementationDetails: "",
      duration: "",
      techniques: [{ techniqueImg: "", technique: "" }],
      linkGitHub: "",
      linkLive: "",
      featuredProject: false
    }
}
