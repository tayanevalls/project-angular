import { Component} from '@angular/core';

import { ExcelService } from '../services/excel.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent{
  
  title = 'exportExcelInAngular';
  dataOfContacts: any = [{

    
    id: 11,
    name: 'Thais Valls',
    company: 'Nasa',
    phone: '11 99862-4832',
    relationship: 'Family'
  },
  {
    id: 12,
    name: 'Juliana Carvalho',
    company: 'Nasa',
    phone: '11 99862-4832',
    relationship: 'Friend'
  },
  {
    id: 13,
    name: 'Pedro Almeida',
    company: 'Nasa',
    phone: '11 99862-4832',
    relationship: 'Work'
  },
    {
      id: 14,
      name: 'Jéssica Nunes',
      company: 'Nasa',
      phone: '11 99862-4832',
      relationship: 'Friend'
    },
  {
    id: 15,
    name: 'Laura Silva',
    company: 'Nasa',
    phone: '11 99862-4832',
    relationship: 'Work'
  }];
  constructor(private excelService:ExcelService){

  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.dataOfContacts, 'contacts_data');
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/