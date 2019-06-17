import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {

  expenseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.expenseForm = this.createExpenseForm();
  }

 private createExpenseForm(): FormGroup {
    return this.formBuilder.group({
      date: this.formBuilder.control(new Date()),
      label: this.formBuilder.control(''),
      enlistedIn: this.formBuilder.control(''),
      users: this.formBuilder.array([])
    });
  }

}
