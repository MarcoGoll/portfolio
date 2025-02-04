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

  /**
  * Is called when the component is initialized.
  * Is storing the 'id' parameter in the `urlID` variable.
  */
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.urlID = params.get('id');
    });
  }

  /**
  * Navigates the user to the landing page (home route).
  */
  gotoLandingpage() {
    this.router.navigate(['/']);
  }

  /**
  * Returns the ID of the next project based on the current index and language.
  * 
  * This method iterates through the project list (English or German) and finds the 
  * next project's ID. If the current project is the last in the list, it returns the 
  * first project's ID to ensure looping behavior.
  * 
  * @param {number} currentIndex - The index of the current project.
  * @returns {string | undefined} The ID of the next project, or `undefined` if not found.
  */
  nextID(currentIndex: number) {
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

  /**
  * Scrolls the window to the top of the page.
  */
  resetPosition() {
    window.scroll({ top: 0 })
  }
}

