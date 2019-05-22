import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {

  formType: string;
  label: FormControl;
  choices: any[];

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formType = this.route.snapshot.url[0].path;
    this.label = new FormControl();
    this.choices = this.createDropdownChoices(this.formType);
  }

  createDropdownChoices(formType: string): any[] {
    if (formType === 'list') {
      return ['list1', 'list2', 'list3'];
    } else {
      return ['person1', 'person2', 'person3'];
    }
  }

}
