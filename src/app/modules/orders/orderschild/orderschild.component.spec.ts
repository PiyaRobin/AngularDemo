import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderschildComponent } from './orderschild.component';

describe('OrderschildComponent', () => {
  let component: OrderschildComponent;
  let fixture: ComponentFixture<OrderschildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderschildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
