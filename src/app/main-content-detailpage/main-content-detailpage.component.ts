import { Component, inject } from '@angular/core';
import { ProjectDataService } from '../shared/services/project-data.service';
import { IncreaseWidthRepeatDirective } from '../shared/directive/increase-width-repeat.directive';
import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HeaderComponent } from "../shared/components/header/header.component";

@Component({
  selector: 'app-main-content-detailpage',
  standalone: true,
  imports: [IncreaseWidthRepeatDirective, RouterLink, HeaderComponent],
  templateUrl: './main-content-detailpage.component.html',
  styleUrl: './main-content-detailpage.component.scss'
})
export class MainContentDetailpageComponent {
  projectData = inject(ProjectDataService);
  urlID: any;
  urlID$: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit() {
    this.urlID = this.route.snapshot.paramMap.get('id');
    // this.urlID$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.urlID = params.get('id')!)
    // );

    console.log(this.urlID);
    console.log(this.urlID$);
  }

  gotoLandingpage() {
    this.router.navigate(['/']);
  }

  nextID(currentIndex: number) {
    for (let i = 0; i < this.projectData.projects.length; i++) {
      if (i == this.projectData.projects.length - 1) {
        return this.projectData.projects[0].id;
      } else if (this.projectData.projects[i].index == currentIndex) {
        return this.projectData.projects[i + 1].id;
      }
    }
  }

}
