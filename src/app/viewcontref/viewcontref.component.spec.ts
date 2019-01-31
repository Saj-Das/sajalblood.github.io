import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcontrefComponent } from './viewcontref.component';

describe('ViewcontrefComponent', () => {
  let component: ViewcontrefComponent;
  let fixture: ComponentFixture<ViewcontrefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcontrefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcontrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
