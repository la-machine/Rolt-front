import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/main/login/login.component';
import { RegistrationComponent } from './components/main/registration/registration.component';
import { HeaderComponent } from './components/sub/header/header.component';
import { FooterComponent } from './components/sub/footer/footer.component';
import { HomeComponent } from './components/main/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { CitizenDashboardComponent } from './components/dashboards/citizen-dashboard/citizen-dashboard.component';
import { LandDashboardComponent } from './components/dashboards/land-dashboard/land-dashboard.component';
import { MayorDashboardComponent } from './components/dashboards/mayor-dashboard/mayor-dashboard.component';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomContentComponent } from './components/main/home/welcom-content/welcom-content.component';
import { ServiceContentComponent } from './components/main/home/service-content/service-content.component';
import { ContactusContentComponent } from './components/main/home/contactus-content/contactus-content.component';
import { ForbidenComponent } from './components/forbiden/forbiden.component';
import { SidebarComponent } from './components/dashboards/sidebar/sidebar.component';
import { CalenderComponent } from './components/dashboards/content/calender/calender.component';
import { NotaryComponent } from './components/dashboards/notary/notary.component';
import { AdminComponent } from './components/dashboards/admin/admin.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './_Guards/auth.guard';
import { LandtitlesComponent } from './components/dashboards/citizen-dashboard/content/landtitles/landtitles.component';
import { MainboardComponent } from './components/dashboards/citizen-dashboard/content/mainboard/mainboard.component';
import { NotaryboardComponent } from './components/dashboards/citizen-dashboard/content/notaryboard/notaryboard.component';
import { RequestsComponent } from './components/dashboards/citizen-dashboard/content/requests/requests.component';
import { SettingsComponent } from './components/dashboards/content/settings/settings.component';
import { ContentComponent } from './components/dashboards/admin/content/content.component';
import { MayorboardComponent } from './components/dashboards/admin/mayorboard/mayorboard.component';
import { LandregistryComponent } from './components/dashboards/admin/landregistry/landregistry.component';
import { LandregistryboardComponent } from './components/dashboards/land-dashboard/landregistryboard/landregistryboard.component';
import { RegistrycontentComponent } from './components/dashboards/land-dashboard/registrycontent/registrycontent.component';
import { LandtitleComponent } from './components/dashboards/land-dashboard/landtitle/landtitle.component';
import { LandsidebarComponent } from './components/dashboards/land-dashboard/landsidebar/landsidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    LandDashboardComponent,
    MayorDashboardComponent,
    CitizenDashboardComponent,
    WelcomContentComponent,
    ServiceContentComponent,
    ContactusContentComponent,
    ForbidenComponent,
    SidebarComponent,
    CalenderComponent,
    NotaryComponent,
    AdminComponent,
    LandtitlesComponent,
    MainboardComponent,
    NotaryboardComponent,
    RequestsComponent,
    SettingsComponent,
    ContentComponent,
    MayorboardComponent,
    LandregistryComponent,
    LandregistryboardComponent,
    RegistrycontentComponent,
    LandtitleComponent,
    LandsidebarComponent
  ],
  exports:[HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GridModule, PagerModule,
    CommonModule, ReactiveFormsModule
  ],
  providers: [
    // AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
