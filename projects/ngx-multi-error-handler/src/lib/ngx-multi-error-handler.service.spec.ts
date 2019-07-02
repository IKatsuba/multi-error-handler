import { TestBed } from '@angular/core/testing';

import { NgxMultiErrorHandlerService } from './ngx-multi-error-handler.service';

describe('NgxMultiErrorHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMultiErrorHandlerService = TestBed.get(NgxMultiErrorHandlerService);
    expect(service).toBeTruthy();
  });
});
