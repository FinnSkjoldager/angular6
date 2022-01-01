import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flexgrid1Component } from './flexgrid1.component';

describe('Flexgrid1Component', () => {
  let component: Flexgrid1Component;
  let fixture: ComponentFixture<Flexgrid1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Flexgrid1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Flexgrid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
