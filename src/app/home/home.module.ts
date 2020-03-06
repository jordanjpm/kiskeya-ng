import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { HomeComponent } from './home.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { HomeSummaryComponent } from './home-summary/home-summary.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';

// modules
import { MaterialModule } from '../material-module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeLandingComponent,
    HomeSummaryComponent,
    HomeDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
