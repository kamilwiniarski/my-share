import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { AvailableListsComponent } from './available-lists/available-lists.component';
import { AvailableFriendsComponent } from './available-friends/available-friends.component';
import { CreateListComponent } from './create-list/create-list.component';
import { ListOverviewComponent } from './list-overview/list-overview.component';
import { FriendOverviewComponent } from './friend-overview/friend-overview.component';

@NgModule({
  declarations: [DashboardContainerComponent, AvailableListsComponent, AvailableFriendsComponent, CreateListComponent, ListOverviewComponent, FriendOverviewComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
