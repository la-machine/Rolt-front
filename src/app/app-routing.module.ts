import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { LoginComponent } from './components/main/login/login.component';
import { RegistrationComponent } from './components/main/registration/registration.component';
import { CitizenDashboardComponent } from './components/dashboards/citizen-dashboard/citizen-dashboard.component';
import { LandDashboardComponent } from './components/dashboards/land-dashboard/land-dashboard.component';
import { MayorDashboardComponent } from './components/dashboards/mayor-dashboard/mayor-dashboard.component';
import { NotaryComponent } from './components/dashboards/notary/notary.component';
import { AdminComponent } from './components/dashboards/admin/admin.component';

const routes: Routes  = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent
  // loadComponent: () => import('./components/main/login/login.component').then((mod) => mod.LoginComponent)
  },
  { path: 'signup', component: RegistrationComponent
  // loadComponent: () => import('./components/main/registration/registration.component').then((mod) => mod.RegistrationComponent)
  },
  {path:'admin', component: AdminComponent},
  { path: 'dashboard', component: CitizenDashboardComponent },
  { path: 'mayor', component: MayorDashboardComponent },
  { path: 'notary', component: NotaryComponent },
  { path: 'registryDashboard', component: LandDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
