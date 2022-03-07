import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { IonRouterOutlet } from '@ionic/angular';
@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.page.html',
  styleUrls: ['./addnew.page.scss'],
})
export class AddnewPage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  dateValue = '';
  dateFormatted = '';
  datepickerVisible = false;
  entryType: '';

  constructor(public routerOutlet: IonRouterOutlet) {}

  ngOnInit() {}

  formatDate(value: string) {
    return format(parseISO(value), 'dd.MM.yyyy');
  }

  handleDatepick(datePicked) {
    this.dateValue = datePicked;
    this.dateFormatted = this.formatDate(datePicked);
    this.datepickerVisible = false;
  }

  addEntryType(selected) {
    this.entryType = selected.detail.value;
    console.log(this.entryType);
  }
}
