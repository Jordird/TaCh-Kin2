import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauVenteComponent } from './nouveau-vente.component';

describe('NouveauVenteComponent', () => {
  let component: NouveauVenteComponent;
  let fixture: ComponentFixture<NouveauVenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouveauVenteComponent]
    });
    fixture = TestBed.createComponent(NouveauVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
