import { TestBed } from '@angular/core/testing';

import { NavigationApiService } from './navigation-api.service';

describe('NavigationApiService', () => {
  let service: NavigationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
