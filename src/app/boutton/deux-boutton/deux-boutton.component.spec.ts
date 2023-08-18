import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuxBouttonComponent } from './deux-boutton.component';

describe('DeuxBouttonComponent', () => {
  let component: DeuxBouttonComponent;
  let fixture: ComponentFixture<DeuxBouttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeuxBouttonComponent]
    });
    fixture = TestBed.createComponent(DeuxBouttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
