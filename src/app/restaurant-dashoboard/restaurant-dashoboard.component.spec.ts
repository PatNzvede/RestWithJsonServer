import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDashoboardComponent } from './restaurant-dashoboard.component';

describe('RestaurantDashoboardComponent', () => {
  let component: RestaurantDashoboardComponent;
  let fixture: ComponentFixture<RestaurantDashoboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantDashoboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDashoboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
