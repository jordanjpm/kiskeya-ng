import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { EndComponent } from './end.component';
import { EndLandingComponent } from './end-landing/end-landing.component';
import { EndSummaryComponent } from './end-summary/end-summary.component';
import { EndDetailComponent } from './end-detail/end-detail.component';

const routes: Routes = [
  {
    path: '', component: EndComponent,
    children: [
      {
        path: '', component: EndLandingComponent
      },
      {
        path: 'summary', component: EndSummaryComponent
      },
      {
        path: 'detail/:id', component: EndDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EndRoutingModule { }
