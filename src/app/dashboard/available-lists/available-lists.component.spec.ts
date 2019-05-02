import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableListsComponent } from './available-lists.component';

describe('AvailableListsComponent', () => {
  let component: AvailableListsComponent;
  let fixture: ComponentFixture<AvailableListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
