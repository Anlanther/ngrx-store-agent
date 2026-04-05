import { TestBed } from '@angular/core/testing';

import { StreamingDataService } from './streaming-data-service';

describe('StreamingDataService', () => {
  let service: StreamingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreamingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
