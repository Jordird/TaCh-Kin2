import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEtSupprimerComponent } from './edit-et-supprimer.component';

describe('EditEtSupprimerComponent', () => {
  let component: EditEtSupprimerComponent;
  let fixture: ComponentFixture<EditEtSupprimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEtSupprimerComponent]
    });
    fixture = TestBed.createComponent(EditEtSupprimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
