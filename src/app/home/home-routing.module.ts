import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from './home.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';

const routes: Routes = [
  { path: '', component: HomeComponent  ,
    children: [
      {
        path: '', component: HomeLandingComponent,
        // children: [
        //   {
        //     path: ':id', component: HomeDetailComponent
        //   },
        //   {
        //     path: '', component: HomeSummaryComponent
        //   }
        // ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
