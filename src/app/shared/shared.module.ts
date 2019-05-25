import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownSearchComponent } from './dropdown-search/dropdown-search.component';

@NgModule({
  declarations: [DropdownSearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [DropdownSearchComponent]
})
export class SharedModule { }
