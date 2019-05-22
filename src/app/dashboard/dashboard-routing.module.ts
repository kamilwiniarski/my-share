import { FriendOverviewComponent } from './friend-overview/friend-overview.component';
import { CreateListComponent } from './create-list/create-list.component';
import { DashboardContainerComponent } from './dashboard-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOverviewComponent } from './list-overview/list-overview.component';

const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardContainerComponent
  },
  {
    path: 'dashboard/list/create-new',
    component: CreateListComponent
  },
  {
    path: 'dashboard/friend/create-new',
    component: CreateListComponent
  },
  {
    path: 'dashboard/friend/:id',
    component: FriendOverviewComponent
  },
  {
    path: 'dashboard/list/:id',
    component: ListOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
