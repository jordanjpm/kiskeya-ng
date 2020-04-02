import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from '../interface/APIResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationApiService {

  constructor(private http: HttpClient) { }

  getAPIResponse(url: string): Observable<APIResponse> {
    return this.http.get<APIResponse>(url);
  }

}
