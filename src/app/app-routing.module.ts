import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';

const routes: Routes  = [
  { path: '', component: HomeComponent },
  { path: 'login',
  loadComponent: () => import('./components/main/login/login.component').then((mod) => mod.LoginComponent)
  },
  { path: 'signup',
  loadComponent: () => import('./components/main/registration/registration.component').then((mod) => mod.RegistrationComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
