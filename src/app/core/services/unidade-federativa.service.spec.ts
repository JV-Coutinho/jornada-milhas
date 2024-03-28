import { TestBed } from '@angular/core/testing';

import { UnidadeFederativaService as UnidadeFederativaService } from './unidade-federativa.service';

describe('UnidadeFederativaServiceService', () => {
  let service: UnidadeFederativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadeFederativaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
