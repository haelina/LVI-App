import { Component, OnInit } from '@angular/core';
import WorkerEntry from 'src/app/interfaces/Workerentry';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-workforce',
  templateUrl: './workforce.page.html',
  styleUrls: ['./workforce.page.scss'],
})
export class WorkforcePage implements OnInit {
  workerData: WorkerEntry[];
  constructor(private firestore: FirestoreService) {
    this.firestore.getWorkers(false).subscribe((res) => {
      this.workerData = res;
      console.log(this.workerData);
    });
  }

  ngOnInit() {}
}
