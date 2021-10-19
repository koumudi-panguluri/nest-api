import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    canActivate: [],
    // children: [
    //   {
    //     path: "home",
    //     canActivate: [],
    //     loadChildren: () => import("./app-commons/app-commons.module").then(m => m.AppCommonsModule)
    //   }
    // ],
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
