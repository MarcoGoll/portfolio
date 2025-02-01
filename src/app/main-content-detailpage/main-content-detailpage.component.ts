import { Component, inject } from '@angular/core';
import { ProjectDataService } from '../shared/services/project-data.service';
import { IncreaseWidthRepeatDirective } from '../shared/directive/increase-width-repeat.directive';
import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Project } from '../shared/interfaces/project';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'app-main-content-detailpage',
  standalone: true,
  imports: [IncreaseWidthRepeatDirective, RouterLink, TranslatePipe,
    TranslateDirective],
  templateUrl: './main-content-detailpage.component.html',
  styleUrls: ['./main-content-detailpage.component.scss', './main-content-detailpage.responsive.scss']
})
export class MainContentDetailpageComponent {
  projectData = inject(ProjectDataService);
  urlID: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.urlID = params.get('id');
    });
  }

  gotoLandingpage() {
    this.router.navigate(['/']);
  }

  nextID(currentIndex: number) {
    //TODO: Forloop in separate function, to reduce redundant code
    if (this.projectData.currentLanguage === "en") {
      for (let i = 0; i < this.projectData.projectsEN.length; i++) {
        if (i == this.projectData.projectsEN.length - 1) {
          return this.projectData.projectsEN[0].id;
        } else if (this.projectData.projectsEN[i].index == currentIndex) {
          return this.projectData.projectsEN[i + 1].id;
        }
      }
    }
    if (this.projectData.currentLanguage === "de") {
      for (let i = 0; i < this.projectData.projectsDE.length; i++) {
        if (i == this.projectData.projectsDE.length - 1) {
          return this.projectData.projectsDE[0].id;
        } else if (this.projectData.projectsDE[i].index == currentIndex) {
          return this.projectData.projectsDE[i + 1].id;
        }
      }
    }
  }

  resetPosition() {
    window.scroll({ top: 0 })
  }
}

