import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockClimbingComponent } from './rock-climbing.component';

describe('RockClimbingComponent', () => {
  let component: RockClimbingComponent;
  let fixture: ComponentFixture<RockClimbingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockClimbingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RockClimbingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
