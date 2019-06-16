import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'friend-overview',
  templateUrl: './friend-overview.component.html',
  styleUrls: ['./friend-overview.component.scss']
})
export class FriendOverviewComponent implements OnInit {

  friend = {
    name: 'person1',
    id: 0,
    lists: [{
      id: 0,
      label: 'List1',
      share: 0
    },
    {
      id: 2,
      label: 'List2',
      share: 50
    }]
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToList(id: number): void {
    this.router.navigate([`dashboard/list/${id}`]);

  }

}
