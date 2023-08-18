import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectArtcilesComponent } from './select-artciles.component';

describe('SelectArtcilesComponent', () => {
  let component: SelectArtcilesComponent;
  let fixture: ComponentFixture<SelectArtcilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectArtcilesComponent]
    });
    fixture = TestBed.createComponent(SelectArtcilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
