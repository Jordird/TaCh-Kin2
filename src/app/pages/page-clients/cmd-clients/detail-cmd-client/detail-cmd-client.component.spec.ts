import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCmdClientComponent } from './detail-cmd-client.component';

describe('DetailCmdClientComponent', () => {
  let component: DetailCmdClientComponent;
  let fixture: ComponentFixture<DetailCmdClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailCmdClientComponent]
    });
    fixture = TestBed.createComponent(DetailCmdClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
