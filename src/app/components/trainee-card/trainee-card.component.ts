import { Component, Input, OnInit } from '@angular/core';
import TraineeEntry from 'src/app/interfaces/TraineeEntry';
import Userdetails from 'src/app/interfaces/Userdetails';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-trainee-card',
  templateUrl: './trainee-card.component.html',
  styleUrls: ['./trainee-card.component.scss'],
})
export class TraineeCardComponent implements OnInit {
  @Input() trainee: TraineeEntry;
  userdata: Userdetails;

  constructor(private firestore: FirestoreService) {}

  async getUserDetails() {
    const found = await this.firestore.getUser(this.trainee.uid);
    if (found) {
      this.userdata = found;
    }
  }

  ngOnInit() {
    this.getUserDetails();
  }
}
