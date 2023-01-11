import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsComponent } from './foods.component';

describe('FoodsComponent', () => {
  let component: FoodsComponent;
  let fixture: ComponentFixture<FoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
