import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauCmdClientComponent } from './nouveau-cmd-client.component';

describe('NouveauCmdClientComponent', () => {
  let component: NouveauCmdClientComponent;
  let fixture: ComponentFixture<NouveauCmdClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouveauCmdClientComponent]
    });
    fixture = TestBed.createComponent(NouveauCmdClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
