import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-overview',
  templateUrl: './list-overview.component.html',
  styleUrls: ['./list-overview.component.scss']
})
export class ListOverviewComponent implements OnInit {

  expenseDetails: number;

  expenses = [{
    id: 0,
    label: 'Expense 1',
    value: 24,
    date: null,
    users: [{id: 0, name: 'User1', share: 16}, {id: 1, name: 'User2', share: 8}]
  },
  {
    id: 1,
    label: 'Expense 2',
    value: 2343,
    date: null,
    users: [{id: 0, name: 'User1', share: 16}, {id: 1, name: 'User2', share: 8}]
  }];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleExpenseDetails(id: number): void {
    if (this.expenseDetails === id) {
      this.expenseDetails = null;
    } else {
      this.expenseDetails = id;
    }
  }

  navigateToUser(id: number): void {
    this.router.navigate([`dashboard/friend/${id}`]);
  }

}
