import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { HomeComponent } from './home.component';

// modules
import { HomeRoutingModule } from './home-routing.module';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { HomeSummaryComponent } from './home-summary/home-summary.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeLandingComponent,
    HomeSummaryComponent,
    HomeDetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
