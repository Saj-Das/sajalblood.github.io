import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemprefComponent } from './tempref.component';

describe('TemprefComponent', () => {
  let component: TemprefComponent;
  let fixture: ComponentFixture<TemprefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemprefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemprefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
