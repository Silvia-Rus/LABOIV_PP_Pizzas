/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiPaisesService } from './apiPaises.service';

describe('Service: ApiPaises', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiPaisesService]
    });
  });

  it('should ...', inject([ApiPaisesService], (service: ApiPaisesService) => {
    expect(service).toBeTruthy();
  }));
});
