import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { HomeComponent } from './home.component';

// modules
import { HomeRoutingModule } from './home-routing.module';
import { HomeLandingComponent } from './home-landing/home-landing.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeLandingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
