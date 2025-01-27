import { Component } from '@angular/core';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { ContactMeSectionComponent } from './contact-me-section/contact-me-section.component';
import { FeedbackSectionComponent } from './feedback-section/feedback-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProjectsOverviewSectionComponent } from './projects-overview-section/projects-overview-section.component';
import { SkillSectionComponent } from './skill-section/skill-section.component';
import { HeaderComponent } from "../shared/components/header/header.component";
import { FooterComponent } from "../shared/components/footer/footer.component";

@Component({
  selector: 'app-main-content-landingpage',
  standalone: true,
  imports: [
    AboutMeSectionComponent,
    ContactMeSectionComponent,
    FeedbackSectionComponent,
    HeroSectionComponent,
    ProjectsOverviewSectionComponent,
    SkillSectionComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './main-content-landingpage.component.html',
  styleUrl: './main-content-landingpage.component.scss'
})
export class MainContentLandingpageComponent {

}
