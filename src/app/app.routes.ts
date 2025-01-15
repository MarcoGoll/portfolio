import { Routes } from '@angular/router';
import { MainContentLandingpageComponent } from './main-content-landingpage/main-content-landingpage.component';
import { ImprintComponent } from './shared/components/imprint/imprint.component';
import { PrivacyPolicyComponent } from './shared/components/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainContentLandingpageComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacyPolicy', component: PrivacyPolicyComponent },
];
