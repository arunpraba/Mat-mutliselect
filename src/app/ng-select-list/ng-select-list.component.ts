import { Component, Input, OnInit } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';

export interface inputList {
  id?: number;
  text?: number;
}

@Component({
  selector: 'app-ng-select-list',
  templateUrl: './ng-select-list.component.html',
  styleUrls: ['./ng-select-list.component.scss']
})
export class NgSelectListComponent implements OnInit {
  @Input() dataArray: inputList[];
  lists: inputList[];
  constructor() {}

  ngOnInit() {
    this.lists = this.dataArray;
  }

  toggleAll(selectonAll: MatSelectionList) {
    selectonAll.selectAll();

    console.log(selectonAll);
  }
}
