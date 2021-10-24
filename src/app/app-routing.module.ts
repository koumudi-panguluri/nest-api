import { ProfileComponent } from './profile/profile.component';
import { LauncherPageComponent } from './launcher-page/launcher-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: LauncherPageComponent,
    canActivate: [],
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [],
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [],
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
