import { Component, ViewChild } from '@angular/core';

import { GridComponent, GridColumn, GridOption, GridEvent } from 'ng-simple-grid';

import { sampleDataList } from './sample-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('grid')
  grid: GridComponent;

  gridConfig: any = {
    columns: [
      { type: 'text',   key: 'id',     name:'ID',     nullValue: '1'},
      { type: 'text',   key: 'name',   name:'NAME',   nullValue: '2'},
      { type: 'button', key: 'email',  name:'EMAIL',  nullValue: '3', 
        onClick: (e: any, value: any, data: any, index: number) => {
          alert(value);
        }},
    ],
    option: {
      rowsPerPage: 10
    },
    event: {
      onClickRow: (row: any, index: number) => {
        
      }
    }
  };

  dataList: any[];

  ngOnInit(): void {
    this.dataList = sampleDataList;
  }

  
}
