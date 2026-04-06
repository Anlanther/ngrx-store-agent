import { TestBed } from '@angular/core/testing';

import { DataConverterService } from './data-converter-service';

describe('MessageConverterService', () => {
  let service: DataConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
