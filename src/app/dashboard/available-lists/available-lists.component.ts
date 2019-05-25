import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'available-lists',
  templateUrl: './available-lists.component.html',
  styleUrls: ['./available-lists.component.scss']
})
export class AvailableListsComponent implements OnInit {

  @Input() tempLists;

  constructor() { }

  ngOnInit() {
  }

}
