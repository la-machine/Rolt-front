import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { LandtitleComponent } from './dashboard/nav/landtitle/landtitle.component';
import { ContentComponent } from './dashboard/nav/content/content.component';
import { CertificatesComponent } from './dashboard/nav/certificates/certificates.component';
import { RequestComponent } from './dashboard/nav/request/request.component';
import { LandregistryComponent } from './dashboard/nav/landregistry/landregistry.component';
import { SubdivisionofficerComponent } from './dashboard/nav/subdivisionofficer/subdivisionofficer.component';
import { SettingsComponent } from './dashboard/nav/settings/settings.component';
import { ForbidenComponent } from './components/forbiden/forbiden.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotaryComponent } from './dashboard/nav/notary/notary.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { LoginComponent } from './components/main/login/login.component';
import { RegisterComponent } from './components/main/register/register.component';

const routes: Routes  = [
  { path: '', component: HomeComponent},
  // { path: '**', redirectTo: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'forbiden', component: ForbidenComponent},
  {path:'admin', component: AdminComponent},
  { path: 'dashboard', component: DashboardComponent,
    children: [
      {path:"home", component: ContentComponent},
      {path:"Ownership", component: CertificatesComponent},
      {path:"application", component: RequestComponent},
      {path:"landtitle", component: LandtitleComponent},
      {path:"landregistry", component: LandregistryComponent},
      {path:"subdivision", component: SubdivisionofficerComponent},
      {path:"notary", component: NotaryComponent},
      {path:"settings", component: SettingsComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
