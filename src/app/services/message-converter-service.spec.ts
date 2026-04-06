import { TestBed } from '@angular/core/testing';

import { MessageConverterService } from './message-converter-service';

describe('MessageConverterService', () => {
  let service: MessageConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
