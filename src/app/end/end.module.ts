import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { EndComponent } from './end.component';
import { EndLandingComponent } from './end-landing/end-landing.component';

// modules
import { MaterialModule } from '../material-module';
import { EndRoutingModule } from './end-routing.module';
import { EndSummaryComponent } from './end-summary/end-summary.component';
import { EndDetailComponent } from './end-detail/end-detail.component';

@NgModule({
  declarations: [
    EndComponent,
    EndLandingComponent,
    EndSummaryComponent,
    EndDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EndRoutingModule
  ]
})
export class EndModule { }
