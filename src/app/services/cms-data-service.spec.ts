import { TestBed } from '@angular/core/testing';

import { CmsDataService } from './cms-data-service';

describe('CmsDataService', () => {
  let service: CmsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
