import { TestBed } from '@angular/core/testing';

import { ListanoticiaService } from './listanoticia.service';

describe('ListanoticiaService', () => {
  let service: ListanoticiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListanoticiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
