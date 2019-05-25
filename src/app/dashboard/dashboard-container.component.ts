import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  tempLists = ['list1', 'list2', 'list3'];
  tempFriends = ['friend1', 'friend2', 'friend3'];

  constructor() { }

  ngOnInit() {
  }

}
