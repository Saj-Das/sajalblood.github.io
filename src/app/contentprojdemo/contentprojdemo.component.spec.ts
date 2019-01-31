import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentprojdemoComponent } from './contentprojdemo.component';

describe('ContentprojdemoComponent', () => {
  let component: ContentprojdemoComponent;
  let fixture: ComponentFixture<ContentprojdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentprojdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentprojdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
