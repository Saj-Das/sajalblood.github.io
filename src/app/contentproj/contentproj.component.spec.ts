import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentprojComponent } from './contentproj.component';

describe('ContentprojComponent', () => {
  let component: ContentprojComponent;
  let fixture: ComponentFixture<ContentprojComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentprojComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
