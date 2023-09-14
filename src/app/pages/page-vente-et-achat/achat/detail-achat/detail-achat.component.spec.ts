import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAchatComponent } from './detail-achat.component';

describe('DetailAchatComponent', () => {
  let component: DetailAchatComponent;
  let fixture: ComponentFixture<DetailAchatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailAchatComponent]
    });
    fixture = TestBed.createComponent(DetailAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
