import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import * as moment from 'moment';
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

  dateRange: { from: string; to: string };
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range',
    weekStart: 1,
    monthFormat: 'MMMM YYYY',
    showMonthPicker: false,
    weekdays: ['SU', 'MA', 'TI', 'KE', 'TO', 'PE', 'LA'],
    color: 'primary',
  };

  constructor(private firestore: FirestoreService) {
    this.firestore.getWorkers().subscribe((res) => {
      this.workerData = res;
      console.log(this.workerData);
    });
  }

  ngOnInit() {}

  getFiltered() {
    console.log('Filtered by locations: ' + this.filterLocations);
    console.log(moment(this.dateRange.from).format());
    console.log(moment(this.dateRange.to).format());
    //const start = '2022-03-25T00:00:00+02:00';
    //const end = '2022-03-31T00:00:00+02:00';
    this.firestore
      .filterWorkersByLocation(this.filterLocations)
      .subscribe((res) => {
        const start = moment(this.dateRange.from).format();
        const end = moment(this.dateRange.to).format();
        const filteredWorkers = [];
        for (const w of res) {
          for (const d of w.dates) {
            if (start <= d && d <= end) {
              filteredWorkers.push(w);
              break;
            }
          }
        }
        /*res.forEach((w) => {
          w.dates.forEach((d) => {
            if (start.localeCompare(d) <= 0 && end.localeCompare(d) >= 0) {
              filteredWorkers.push(w);
            }
          });
        });
        */
        this.workerData = filteredWorkers;
        console.log(this.workerData);
      });
    //console.log(moment(this.dateRange.from).format());
  }
}
