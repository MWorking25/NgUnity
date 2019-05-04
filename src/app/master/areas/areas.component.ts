import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import {MatDialog} from '@angular/material';
import { AreaDetailsComponent } from './area-details/area-details.component';
@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;

  columnDefs = [
    {headerName: 'Make', field: 'make', checkboxSelection: true,pinned: 'left'},
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price' }
];


paginationNumberFormatter;
rowData: any;
paginationPageSize = 20;
  constructor(private http: HttpClient, public dialog: MatDialog) { }


  defaultColDef = {
    // editable: true,
    enableRowGroup: true,
    enablePivot: true,
   
    enableValue: true,
    sortable: true,
    resizable: true,
    filter: true,
   
  };

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
   
    this.paginationNumberFormatter = function(params) {
      return "[" + params.value.toLocaleString() + "]";
    };

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AreaDetailsComponent, {
      width: '100%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }


  onSelectionChanged(event) {
    var selectedRows = event.api.getSelectedRows();
    console.log(selectedRows);
  }

}
