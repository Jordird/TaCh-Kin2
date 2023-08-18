import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaitStockComponent } from './detait-stock.component';

describe('DetaitStockComponent', () => {
  let component: DetaitStockComponent;
  let fixture: ComponentFixture<DetaitStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetaitStockComponent]
    });
    fixture = TestBed.createComponent(DetaitStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
