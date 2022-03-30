import { Component, Input, OnInit } from '@angular/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
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
}
