import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from './home.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { HomeSummaryComponent } from './home-summary/home-summary.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'summary', component: HomeSummaryComponent
      },
      {
        path: 'detail/:id', component: HomeDetailComponent
      },     
      {
        path: '', component: HomeLandingComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
