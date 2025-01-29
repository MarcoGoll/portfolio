import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ParentFirstChildTopDownDirective } from '../../directive/parent-first-child-top-down.directive';
import { ParentFirstChildLeftRightDirective } from '../../directive/parent-first-child-left-right.directive';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    ParentFirstChildTopDownDirective,
    ParentFirstChildLeftRightDirective,
    CommonModule,
    TranslatePipe,
    TranslateDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.responsive.scss']
})
export class HeaderComponent {
  isHamburgerOpen: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2, private translate: TranslateService) { }

  toggleHamburger() {
    this.isHamburgerOpen = !this.isHamburgerOpen;
  }

  toggleLanguage(language: string) {
    this.translate.use(language);
  }

}
