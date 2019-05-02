import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableFriendsComponent } from './available-friends.component';

describe('AvailableFriendsComponent', () => {
  let component: AvailableFriendsComponent;
  let fixture: ComponentFixture<AvailableFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
