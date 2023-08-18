import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroisBouttonsComponent } from './trois-bouttons.component';

describe('TroisBouttonsComponent', () => {
  let component: TroisBouttonsComponent;
  let fixture: ComponentFixture<TroisBouttonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TroisBouttonsComponent]
    });
    fixture = TestBed.createComponent(TroisBouttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
