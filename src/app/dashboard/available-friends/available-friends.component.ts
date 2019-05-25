import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'available-friends',
  templateUrl: './available-friends.component.html',
  styleUrls: ['./available-friends.component.scss']
})
export class AvailableFriendsComponent implements OnInit {

 @Input() tempFriends;

  constructor() { }

  ngOnInit() {
  }

}
