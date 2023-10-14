import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/sub/header/header.component';
import { FooterComponent } from './components/sub/footer/footer.component';
import { HomeComponent } from './components/main/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomContentComponent } from './components/main/home/welcom-content/welcom-content.component';
import { ServiceContentComponent } from './components/main/home/service-content/service-content.component';
import { ContactusContentComponent } from './components/main/home/contactus-content/contactus-content.component';
import { ForbidenComponent } from './components/forbiden/forbiden.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './_Guards/auth.guard';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginComponent } from './components/main/login/login.component';
import { RegisterComponent } from './components/main/register/register.component';
import { ForgetpasswordComponent } from './components/main/forgetpassword/forgetpassword.component';
import { ResertpasswordComponent } from './components/main/resertpassword/resertpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WelcomContentComponent,
    ServiceContentComponent,
    ContactusContentComponent,
    ForbidenComponent,
    LoginComponent,
    RegisterComponent,
    ForgetpasswordComponent,
    ResertpasswordComponent,
  ],
  exports:[HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GridModule, PagerModule,
    CommonModule, ReactiveFormsModule,
    DashboardModule
  ],
  providers: [
    // AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
