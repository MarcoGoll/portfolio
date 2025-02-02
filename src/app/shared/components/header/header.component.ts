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

  toggleHamburger() {
    this.isHamburgerOpen = !this.isHamburgerOpen;
  }

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

  changeLanguageCheckboxTo(value: true | false) {
    if ((this.currentLanguage === "en" && value == false) || (this.currentLanguage === "de" && value == true)) {
    } else {
      this.setLanguage();
    }
  }

}
