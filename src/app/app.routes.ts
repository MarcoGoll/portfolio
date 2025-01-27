import { Routes } from '@angular/router';
import { MainContentLandingpageComponent } from './main-content-landingpage/main-content-landingpage.component';
import { MainContentDetailpageComponent } from './main-content-detailpage/main-content-detailpage.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainContentLandingpageComponent },
    { path: 'detail/:id', component: MainContentDetailpageComponent },
    { path: 'legal', component: LegalNoticeComponent },
    { path: 'privacyPolicy', component: PrivacyPolicyComponent },
];
