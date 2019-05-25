import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'create-friend',
  templateUrl: './create-friend.component.html',
  styleUrls: ['./create-friend.component.scss']
})
export class CreateFriendComponent implements OnInit {

  createForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      name: [],
      email: [],
      lists: this.formBuilder.array([
        this.formBuilder.group({
          label: [],
          share: []
        })
      ])
    });
  }
  get lists() {
    return this.createForm.get('lists') as FormArray;
  }
}
