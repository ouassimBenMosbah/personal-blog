import { TestBed } from '@angular/core/testing';
import { FunFactApiService } from './fun-fact-api.service';

describe('FunFactApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FunFactApiService = TestBed.get(FunFactApiService);
    expect(service).toBeTruthy();
  });
});
