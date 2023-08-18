import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatClientComponent } from './achat-client.component';

describe('AchatClientComponent', () => {
  let component: AchatClientComponent;
  let fixture: ComponentFixture<AchatClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchatClientComponent]
    });
    fixture = TestBed.createComponent(AchatClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
