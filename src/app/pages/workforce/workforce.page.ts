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
  filterLocations: string[];
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

  getFiltered() {
    console.log('Filtered by locations: ' + this.filterLocations);
    this.firestore
      .filterWorkersByLocation(this.filterLocations)
      .subscribe((res) => {
        this.workerData = res;
        console.log(this.workerData);
      });
  }

  getOptions(dates): CalendarComponentOptions {
    const calOptions: CalendarComponentOptions = {
      weekStart: 1,
      monthFormat: 'MMMM YYYY',
      showMonthPicker: false,
      weekdays: ['SU', 'MA', 'TI', 'KE', 'TO', 'PE', 'LA'],
      color: 'primary',
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
