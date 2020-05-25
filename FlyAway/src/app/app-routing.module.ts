import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";

import {RegisterComponent} from "./register/register.component";
import {MovieComponent} from "./movie/movie.component";

const routes: Routes = [
  {path : '',         component: MovieComponent},
  {path : 'login',    component : HomePageComponent},
  {path : 'register', component : RegisterComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
