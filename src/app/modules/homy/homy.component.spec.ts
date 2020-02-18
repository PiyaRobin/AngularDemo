import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomyComponent } from './homy.component';

describe('HomyComponent', () => {
  let component: HomyComponent;
  let fixture: ComponentFixture<HomyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
