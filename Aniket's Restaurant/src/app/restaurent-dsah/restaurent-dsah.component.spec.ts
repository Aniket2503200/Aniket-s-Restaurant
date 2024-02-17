import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentDsahComponent } from './restaurent-dsah.component';

describe('RestaurentDsahComponent', () => {
  let component: RestaurentDsahComponent;
  let fixture: ComponentFixture<RestaurentDsahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurentDsahComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurentDsahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
