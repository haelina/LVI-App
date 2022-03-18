import { Component, OnInit } from '@angular/core';
import JobEntry from 'src/app/interfaces/JobEntry';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {
  jobsData: JobEntry[];
  filterLocations: string[];

  constructor(private firestore: FirestoreService) {
    this.firestore.getJobs().subscribe((res) => {
      this.jobsData = res;
      console.log(this.jobsData);
    });
  }

  ngOnInit() {}

  getFiltered() {
    console.log('Filtered by locations: ' + this.filterLocations);
    this.firestore
      .filterJobsByLocation(this.filterLocations)
      .subscribe((res) => {
        this.jobsData = res;
        console.log(this.jobsData);
      });
  }
}
