import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebstorageComponent } from './webstorage.component';

describe('WebstorageComponent', () => {
  let component: WebstorageComponent;
  let fixture: ComponentFixture<WebstorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebstorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
