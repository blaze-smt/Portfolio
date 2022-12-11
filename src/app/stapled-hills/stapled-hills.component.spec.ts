import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StapledHillsComponent } from './stapled-hills.component';

describe('StapledHillsComponent', () => {
  let component: StapledHillsComponent;
  let fixture: ComponentFixture<StapledHillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StapledHillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StapledHillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
