import { TestBed } from '@angular/core/testing';

import { DbMasterService } from './db-master.service';

describe('DbMasterService', () => {
  let service: DbMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
