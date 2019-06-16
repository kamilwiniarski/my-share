import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainerComponent } from './dashboard-container.component';
import { AvailableListsComponent } from './available-lists/available-lists.component';
import { AvailableFriendsComponent } from './available-friends/available-friends.component';
import { CreateListComponent } from './create-list/create-list.component';
import { ListOverviewComponent } from './list-overview/list-overview.component';
import { FriendOverviewComponent } from './friend-overview/friend-overview.component';
import { CreateFriendComponent } from './create-friend/create-friend.component';
import { SharedModule } from '../shared/shared.module';
import { ExpenseFormComponent } from './expense-form/expense-form.component';

@NgModule({
  declarations: [
    DashboardContainerComponent,
    AvailableListsComponent,
    AvailableFriendsComponent,
    CreateListComponent,
    ListOverviewComponent,
    FriendOverviewComponent,
    CreateFriendComponent,
    ExpenseFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    DashboardRoutingModule,
    RouterModule
  ]
})
export class DashboardModule { }
