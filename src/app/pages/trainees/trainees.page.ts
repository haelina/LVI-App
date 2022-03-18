import { Component, OnInit } from '@angular/core';
import TraineeEntry from 'src/app/interfaces/TraineeEntry';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-trainees',
  templateUrl: './trainees.page.html',
  styleUrls: ['./trainees.page.scss'],
})
export class TraineesPage implements OnInit {
  traineeData: TraineeEntry[];
  filterLocations: string[];

  constructor(private firestore: FirestoreService) {
    this.firestore.getTrainees().subscribe((res) => {
      this.traineeData = res;
      console.log(this.traineeData);
    });
  }

  ngOnInit() {}

  getFiltered() {
    console.log('Filtered by locations: ' + this.filterLocations);
    this.firestore
      .filterTraineesByLocation(this.filterLocations)
      .subscribe((res) => {
        this.traineeData = res;
        console.log(this.traineeData);
      });
  }
}
