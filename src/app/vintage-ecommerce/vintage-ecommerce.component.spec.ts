import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VintageEcommerceComponent } from './vintage-ecommerce.component';

describe('VintageEcommerceComponent', () => {
  let component: VintageEcommerceComponent;
  let fixture: ComponentFixture<VintageEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VintageEcommerceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VintageEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
