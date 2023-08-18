import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreCmdClientsComponent } from './livre-cmd-clients.component';

describe('LivreCmdClientsComponent', () => {
  let component: LivreCmdClientsComponent;
  let fixture: ComponentFixture<LivreCmdClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivreCmdClientsComponent]
    });
    fixture = TestBed.createComponent(LivreCmdClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
