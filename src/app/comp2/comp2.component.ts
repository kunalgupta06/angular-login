import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  searchnumber: string='';
  tableData = [
    {
      column1: '999999999', column2: '20', column3: '30', column4: '40', column5: '50', column6: '60', column7: '70', column8: '80', column9: '90', column10: '100',
    },
    {
      column1: '998888888', column2: '20', column3: '30', column4: '40', column5: '50', column6: '60', column7: '70', column8: '80', column9: '90', column10: '100',
    }
    ,
    {
      column1: '998888888', column2: '20', column3: '30', column4: '40', column5: '50', column6: '60', column7: '70', column8: '80', column9: '90', column10: '100',
    }
  ];
  FilteredtableData: any[] = [];

  constructor() { }

  ngOnInit(): void {
   // this.FilteredtableData = [...this.tableData];
  }
  onSearch(){
    if(this.searchnumber == '') {
      this.FilteredtableData == this.tableData;

    } else{
      this.FilteredtableData = this.tableData.filter(item => {
        return item.column1.includes(this.searchnumber.trim());
      }

      );
    }

  }
  onDelete(){

  }

}
