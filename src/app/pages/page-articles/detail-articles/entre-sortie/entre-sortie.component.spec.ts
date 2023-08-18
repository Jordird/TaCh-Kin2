import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreSortieComponent } from './entre-sortie.component';

describe('EntreSortieComponent', () => {
  let component: EntreSortieComponent;
  let fixture: ComponentFixture<EntreSortieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntreSortieComponent]
    });
    fixture = TestBed.createComponent(EntreSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
