import { Component, OnInit } from '@angular/core';
import { listArray } from './variables';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multi-select-list';
  arrayList = listArray;
  selectedList = [];
  handleChange() {
    console.log(this.selectedList);
  }
}
