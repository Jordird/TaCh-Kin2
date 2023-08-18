import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerMotDePassComponent } from './changer-mot-de-pass.component';

describe('ChangerMotDePassComponent', () => {
  let component: ChangerMotDePassComponent;
  let fixture: ComponentFixture<ChangerMotDePassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangerMotDePassComponent]
    });
    fixture = TestBed.createComponent(ChangerMotDePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
