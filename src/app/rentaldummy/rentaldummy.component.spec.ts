import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaldummyComponent } from './rentaldummy.component';

describe('RentaldummyComponent', () => {
  let component: RentaldummyComponent;
  let fixture: ComponentFixture<RentaldummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentaldummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaldummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
