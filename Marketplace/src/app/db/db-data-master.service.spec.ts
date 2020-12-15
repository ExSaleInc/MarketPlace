import { TestBed } from '@angular/core/testing';

import { DbDataMasterService } from './db-data-master.service';

describe('DbDataMasterService', () => {
  let service: DbDataMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbDataMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
