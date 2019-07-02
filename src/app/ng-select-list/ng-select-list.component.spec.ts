import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSelectListComponent } from './ng-select-list.component';

describe('NgSelectListComponent', () => {
  let component: NgSelectListComponent;
  let fixture: ComponentFixture<NgSelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
