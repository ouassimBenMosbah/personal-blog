import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackblitzDisplayComponent } from './stackblitz-display.component';

describe('StackblitzDisplayComponent', () => {
  let component: StackblitzDisplayComponent;
  let fixture: ComponentFixture<StackblitzDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackblitzDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackblitzDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
