import { TestBed } from '@angular/core/testing';

import { ProjectApiService } from './projectApi.service';

describe('ProjectApiService', () => {
  let service: ProjectApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
