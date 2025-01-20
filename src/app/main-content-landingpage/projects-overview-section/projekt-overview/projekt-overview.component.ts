import { Component, Input } from '@angular/core';
import { Project } from '../../../shared/interfaces/project';

@Component({
  selector: 'app-projekt-overview',
  standalone: true,
  imports: [],
  templateUrl: './projekt-overview.component.html',
  styleUrl: './projekt-overview.component.scss'
})
export class ProjektOverviewComponent {

  @Input("project") project: Project =
    {
      //DEFAULT VALUE
      projectImg: "",
      name: "",
      description: "",
      implementationDetails: "",
      duration: "",
      techniques: [{ techniqueImg: "", technique: "" }]
    }
}
