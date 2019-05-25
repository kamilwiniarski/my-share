import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {

  label: FormControl;
  selectedFriends: any[];
  tempFriends = ['friend1', 'friend2', 'friend3'];

  constructor() { }

  ngOnInit() {
    this.label = new FormControl();
  }

  // createDropdownChoices(formType: string): any[] {
  //   if (formType === 'list') {
  //     return ['list1', 'list2', 'list3'];
  //   } else {
  //     return ['person1', 'person2', 'person3'];
  //   }
  // }

}
