import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMoneyComponent } from './page-money.component';

describe('PageMoneyComponent', () => {
  let component: PageMoneyComponent;
  let fixture: ComponentFixture<PageMoneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMoneyComponent]
    });
    fixture = TestBed.createComponent(PageMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
