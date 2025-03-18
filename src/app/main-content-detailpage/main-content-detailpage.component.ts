import { Component, inject } from '@angular/core';
import { ProjectDataService } from '../shared/services/project-data.service';
import { IncreaseWidthRepeatDirective } from '../shared/directive/increase-width-repeat.directive';
import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Project } from '../shared/interfaces/project';
import {
  TranslatePipe,
  TranslateDirective,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-main-content-detailpage',
  standalone: true,
  imports: [
    IncreaseWidthRepeatDirective,
    RouterLink,
    TranslatePipe,
    TranslateDirective,
  ],
  templateUrl: './main-content-detailpage.component.html',
  styleUrls: [
    './main-content-detailpage.component.scss',
    './main-content-detailpage.responsive.scss',
  ],
})
export class MainContentDetailpageComponent {
  projectData = inject(ProjectDataService);
  urlID: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService
  ) {}

  /**
   * Is called when the component is initialized.
   * Is storing the 'id' parameter in the `urlID` variable.
   */
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
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
    if (this.projectData.currentLanguage === 'en') {
      return this.getNextIDForArray(currentIndex, this.projectData.projectsEN);
    }
    if (this.projectData.currentLanguage === 'de') {
      return this.getNextIDForArray(currentIndex, this.projectData.projectsDE);
    }
  }

  /**
   * Returns the ID of the next project in the array based on the given current index.
   * If the current index corresponds to the last element, it returns the first element's ID.
   *
   * @param {number} currentIndex - The index of the current project.
   * @param {Project[]} myArray - The array of projects.
   * @returns {number | undefined} The ID of the next project, or `undefined` if not found.
   */
  getNextIDForArray(currentIndex: number, myArray: Project[]) {
    for (let i = 0; i < myArray.length; i++) {
      if (i == myArray.length - 1) {
        return myArray[0].id;
      } else if (myArray[i].index == currentIndex) {
        return myArray[i + 1].id;
      }
    }
  }

  /**
   * Scrolls the window to the top of the page.
   */
  resetPosition() {
    window.scroll({ top: 0 });
  }
}
