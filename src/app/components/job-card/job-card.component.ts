import { Component, Input, OnInit } from '@angular/core';
import JobEntry from 'src/app/interfaces/JobEntry';
import Userdetails from 'src/app/interfaces/Userdetails';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent implements OnInit {
  @Input() job: JobEntry;
  showContact = false;
  userdata: Userdetails;

  constructor(private firestore: FirestoreService) {}

  async getUserDetails() {
    const found = await this.firestore.getUser(this.job.uid);
    if (found) {
      this.userdata = found;
    }
  }

  ngOnInit() {
    this.getUserDetails();
  }
}
