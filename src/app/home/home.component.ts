import { Component, OnInit } from '@angular/core';
import { NavigationApiService } from '../shared/service/navigation-api.service';
import { NavigationData } from '../shared/model/NavigationData';

// constants
const navigationUrl: string = "/api/home/navigation";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private navigationData: NavigationData;

  constructor(private navAPI: NavigationApiService) { }

  ngOnInit() {
    this.navAPI.getNavigationResponse(navigationUrl).subscribe(response => {
      this.navigationData = response.data;
      console.log(this.navigationData);
    });
  }

}
