import { TestBed } from '@angular/core/testing';

import { DepressionScaleService } from './depression-scale.service';

describe('DepressionScaleService', () => {
  let service: DepressionScaleService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepressionScaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
