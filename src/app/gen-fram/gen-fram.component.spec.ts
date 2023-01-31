import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenFramComponent } from './gen-fram.component';

describe('GenFramComponent', () => {
  let component: GenFramComponent;
  let fixture: ComponentFixture<GenFramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenFramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenFramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
