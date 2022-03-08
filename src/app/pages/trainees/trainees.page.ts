import { Component, OnInit } from '@angular/core';
import WorkerEntry from 'src/app/interfaces/Workerentry';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-trainees',
  templateUrl: './trainees.page.html',
  styleUrls: ['./trainees.page.scss'],
})
export class TraineesPage implements OnInit {
  workerData: WorkerEntry[];
  constructor(private firestore: FirestoreService) {
    this.firestore.getWorkers(true).subscribe((res) => {
      this.workerData = res;
      console.log(this.workerData);
    });
  }

  ngOnInit() {}
}
