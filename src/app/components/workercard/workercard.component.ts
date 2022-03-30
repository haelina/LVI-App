import { Component, Input, OnInit } from '@angular/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { format } from 'date-fns';
import { CalendarComponentOptions } from 'ion2-calendar';
import Userdetails from 'src/app/interfaces/Userdetails';
import WorkerEntry from 'src/app/interfaces/Workerentry';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-workercard',
  templateUrl: './workercard.component.html',
  styleUrls: ['./workercard.component.scss'],
})
export class WorkercardComponent implements OnInit {
  @Input() worker: WorkerEntry;
  showContact = false;
  userdata: Userdetails;

  options: CalendarComponentOptions = {
    pickMode: 'multi',
    color: 'danger',
    daysConfig: [{ date: new Date('2022-03-10'), marked: true }],
  };

  constructor(
    private firestore: FirestoreService,
    private callNumber: CallNumber
  ) {}

  async getUserDetails() {
    const found = await this.firestore.getUser(this.worker.uid);
    if (found) {
      this.userdata = found;
    }
  }

  ngOnInit() {
    this.getUserDetails();
  }

  makeCall() {
    this.callNumber
      .callNumber(this.userdata.phone, true)
      .then((res) => console.log('Launched dialer!', res))
      .catch((err) => console.log('Error launching dialer', err));
  }

  getOptions(dates): CalendarComponentOptions {
    const today = format(new Date(), 'yyy-MM-dd');
    const calOptions: CalendarComponentOptions = {
      weekStart: 1,
      monthFormat: 'MMMM YYYY',
      showMonthPicker: false,
      weekdays: ['SU', 'MA', 'TI', 'KE', 'TO', 'PE', 'LA'],
      color: 'primary',
      daysConfig: [],
    };

    dates.forEach((d) => {
      if (today <= d) {
        const obj = {
          date: d,
          marked: true,
          cssClass: 'worker-calendar-marker',
        };
        calOptions.daysConfig.push(obj);
      }
    });
    return calOptions;
  }
}
