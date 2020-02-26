import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { HomeComponent } from './home.component';

// modules
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
