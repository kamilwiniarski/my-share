import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { NavListComponent } from './app-header/nav-list/nav-list.component';

@NgModule({
  declarations: [HomePageComponent, AppHeaderComponent, AppFooterComponent, NavListComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AppHeaderComponent, AppFooterComponent]
})
export class GlobalModule { }
