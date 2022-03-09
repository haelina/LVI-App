import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import WorkerEntry from 'src/app/interfaces/Workerentry';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-workforce',
  templateUrl: './workforce.page.html',
  styleUrls: ['./workforce.page.scss'],
})
export class WorkforcePage implements OnInit {
  workerData: WorkerEntry[];
  options: CalendarComponentOptions = {
    pickMode: 'multi',
    color: 'danger',
    daysConfig: [{ date: new Date('2022-03-10'), marked: true }],
  };
  constructor(private firestore: FirestoreService) {
    this.firestore.getWorkers(false).subscribe((res) => {
      this.workerData = res;
      console.log(this.workerData);
    });
  }

  ngOnInit() {}
  getOptions(dates): CalendarComponentOptions {
    const calOptions: CalendarComponentOptions = {
      daysConfig: [],
    };
    dates.forEach((d) => {
      //console.log(d);
      const obj = {
        date: d,
        marked: true,
        cssClass: 'worker-calendar-marker',
      };
      calOptions.daysConfig.push(obj);
    });
    return calOptions;
  }
}
