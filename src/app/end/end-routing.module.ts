import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { EndComponent } from './end.component';
import { EndLandingComponent} from './end-landing/end-landing.component';

const routes: Routes = [
  { path: '', component: EndComponent ,
    children: [
    {
      path: '', component: EndLandingComponent,
      // children: [
      //   {
      //     path: ':id', component: EndDetailComponent
      //   },
      //   {
      //     path: '', component: EndSummaryComponent
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
export class EndRoutingModule { }
