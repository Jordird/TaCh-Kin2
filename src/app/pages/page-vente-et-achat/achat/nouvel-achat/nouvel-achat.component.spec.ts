import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelAchatComponent } from './nouvel-achat.component';

describe('NouvelAchatComponent', () => {
  let component: NouvelAchatComponent;
  let fixture: ComponentFixture<NouvelAchatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouvelAchatComponent]
    });
    fixture = TestBed.createComponent(NouvelAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
