import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdClientsComponent } from './cmd-clients.component';

describe('CmdClientsComponent', () => {
  let component: CmdClientsComponent;
  let fixture: ComponentFixture<CmdClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmdClientsComponent]
    });
    fixture = TestBed.createComponent(CmdClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
