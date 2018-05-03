/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EntryServiceService } from './entry-service.service';

describe('Service: EntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntryServiceService]
    });
  });

  it('should ...', inject([EntryServiceService], (service: EntryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
