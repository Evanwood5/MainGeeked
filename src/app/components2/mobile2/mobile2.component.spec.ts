import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mobile2Component } from './mobile2.component';

describe('Mobile2Component', () => {
  let component: Mobile2Component;
  let fixture: ComponentFixture<Mobile2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mobile2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mobile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
