import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Start2Component } from './start2.component';

describe('Start2Component', () => {
  let component: Start2Component;
  let fixture: ComponentFixture<Start2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Start2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Start2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
