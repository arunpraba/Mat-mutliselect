import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectListComponent } from './ng-select-list.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [NgSelectListComponent],
  imports: [CommonModule, MatListModule],
  exports: [NgSelectListComponent]
})
export class NgSelectListModule {}
