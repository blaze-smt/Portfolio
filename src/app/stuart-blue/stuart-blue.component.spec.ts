import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuartBlueComponent } from './stuart-blue.component';

describe('StuartBlueComponent', () => {
  let component: StuartBlueComponent;
  let fixture: ComponentFixture<StuartBlueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuartBlueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuartBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
