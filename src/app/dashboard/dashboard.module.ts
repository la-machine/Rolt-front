import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { ContentComponent } from './nav/content/content.component';
import { HomeComponent } from './nav/home/home.component';
import { LandtitleComponent } from './nav/landtitle/landtitle.component';
import { TitlerequestComponent } from './nav/titlerequest/titlerequest.component';
import { CertificatesComponent } from './nav/certificates/certificates.component';
import { SettingsComponent } from './nav/settings/settings.component';
import { RequestComponent } from './nav/request/request.component';
import { LandregistryComponent } from './nav/landregistry/landregistry.component';
import { SubdivisionofficerComponent } from './nav/subdivisionofficer/subdivisionofficer.component';
import { NotaryComponent } from './nav/notary/notary.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';
import { LandTitleRequestComponent } from './nav/land-title-request/land-title-request.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ContentComponent,
    HomeComponent,
    LandtitleComponent,
    TitlerequestComponent,
    CertificatesComponent,
    SettingsComponent,
    RequestComponent,
    LandregistryComponent,
    SubdivisionofficerComponent,
    NotaryComponent,
    AdminComponent,
    LandTitleRequestComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DashboardModule { }
