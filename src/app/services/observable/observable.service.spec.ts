import { TestBed } from '@angular/core/testing';

import { ObservablesService } from './observable.service';

describe('ObservableService', () => {
  let service: ObservablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
