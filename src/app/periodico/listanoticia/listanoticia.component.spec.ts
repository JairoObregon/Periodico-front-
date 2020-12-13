import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListanoticiaComponent } from './listanoticia.component';

describe('ListanoticiaComponent', () => {
  let component: ListanoticiaComponent;
  let fixture: ComponentFixture<ListanoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListanoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListanoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
