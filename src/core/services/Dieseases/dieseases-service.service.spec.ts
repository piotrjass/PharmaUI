import { TestBed } from '@angular/core/testing';
import { DiseasesServiceService } from './dieseases-service.service';

describe('DiseaseServiceService', () => {
  let service: DiseasesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiseasesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
