import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPeriodicoComponent } from './layout-periodico.component';

describe('LayoutPeriodicoComponent', () => {
  let component: LayoutPeriodicoComponent;
  let fixture: ComponentFixture<LayoutPeriodicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutPeriodicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPeriodicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
