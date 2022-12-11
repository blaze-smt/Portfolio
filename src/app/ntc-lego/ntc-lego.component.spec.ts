import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtcLegoComponent } from './ntc-lego.component';

describe('NtcLegoComponent', () => {
  let component: NtcLegoComponent;
  let fixture: ComponentFixture<NtcLegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NtcLegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NtcLegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
