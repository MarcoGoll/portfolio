import { Component, ElementRef, Renderer2, AfterViewInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ParentFirstChildTopDownDirective } from '../../directive/parent-first-child-top-down.directive';
import { ParentFirstChildLeftRightDirective } from '../../directive/parent-first-child-left-right.directive';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";
import { ProjectDataService } from '../../services/project-data.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    ParentFirstChildTopDownDirective,
    ParentFirstChildLeftRightDirective,
    CommonModule,
    TranslatePipe,
    TranslateDirective,
    FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.responsive.scss']
})
export class HeaderComponent {
  projectData = inject(ProjectDataService);
  isHamburgerOpen: boolean = false;
  currentLanguage: "en" | "de" = "en";
  isCheckboxLanguageChecked: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2, private translate: TranslateService) { }

  /**
  * Toggles the state of the hamburger menu.
  * Controlling whether the hamburger menu is open or closed.
  */
  toggleHamburger() {
    this.isHamburgerOpen = !this.isHamburgerOpen;
  }

  /**
  * Toggles between the German and English language settings.
  */
  setLanguage() {
    if (!this.isCheckboxLanguageChecked) {
      this.isCheckboxLanguageChecked = true;
      this.currentLanguage = "de";
      this.projectData.changeLanguageTo("de");
    } else if (this.isCheckboxLanguageChecked) {
      this.isCheckboxLanguageChecked = false;
      this.currentLanguage = "en";
      this.projectData.changeLanguageTo("en");
    }
  }

  /**
  * Changes the language based on the checkbox value.
  * 
  * @param {true | false} value - The desired state of the language checkbox, where `true` represents German and `false` represents English.
  */
  changeLanguageCheckboxTo(value: true | false) {
    if ((this.currentLanguage === "en" && value == false) || (this.currentLanguage === "de" && value == true)) {
    } else {
      this.setLanguage();
    }
  }

}
