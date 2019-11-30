import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactCodeComponent } from './fun-fact-code.component';

describe('FunFactCodeComponent', () => {
  let component: FunFactCodeComponent;
  let fixture: ComponentFixture<FunFactCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunFactCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunFactCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
