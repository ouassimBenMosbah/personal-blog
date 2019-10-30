import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactDisplayComponent } from './fun-fact-display.component';

describe('FunFactDisplayComponent', () => {
  let component: FunFactDisplayComponent;
  let fixture: ComponentFixture<FunFactDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunFactDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunFactDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
