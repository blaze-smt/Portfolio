import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BohlmanAaComponent } from './bohlman-aa.component';

describe('BohlmanAaComponent', () => {
  let component: BohlmanAaComponent;
  let fixture: ComponentFixture<BohlmanAaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BohlmanAaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BohlmanAaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
