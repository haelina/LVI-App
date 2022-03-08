import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { IonRouterOutlet } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.page.html',
  styleUrls: ['./addnew.page.scss'],
})
export class AddnewPage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  dateValue = '';

  dateFormatted = format(new Date(), 'dd.MM.yyyy');
  datepickerVisible = false;
  entryType: string;
  locations: string[];
  startTime: string;
  endTime: string;
  address: string;
  details: string;

  constructor(
    //public routerOutlet: IonRouterOutlet,
    private router: Router,
    private fireStore: FirestoreService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {}

  formatDate(value: string) {
    return format(parseISO(value), 'dd.MM.yyyy');
  }

  handleDatepick(datePicked) {
    this.dateValue = datePicked;
    this.dateFormatted = this.formatDate(datePicked);
    this.datepickerVisible = false;
  }

  addEntryType(selected) {
    this.entryType = selected.detail.value;
    console.log(this.entryType);
  }

  addLocations(selected: string[]) {
    this.locations = selected;
    console.log(this.locations);
  }

  getStartTime(start: string) {
    this.startTime = start;
    console.log(this.startTime);
  }

  getEndTime(end: string) {
    this.endTime = end;
    console.log(this.endTime);
  }

  getDetails(given: string) {
    this.details = given;
    console.log(this.details);
  }

  addAddress(given: string) {
    this.address = given;
  }

  async sendNewWorkerEntry() {
    await this.fireStore.addWorker({
      uid: this.authService.currentUserUid(),
      locations: this.locations,
      date: this.dateFormatted,
      startTime: this.startTime,
      endTime: this.endTime,
      details: this.details,
      isTrainee: this.entryType === 'trainee' ? true : false,
    });
    console.log('New worker entry sent');
  }

  async sendNewJobEntry() {
    await this.fireStore.addJob({
      uid: this.authService.currentUserUid(),
      locations: this.locations,
      date: this.dateFormatted,
      startTime: this.startTime,
      endTime: this.endTime,
      details: this.details,
      address: this.address,
    });
    console.log('New job entry sent');
  }

  sendNewEntry() {
    if (this.entryType === 'job') {
      this.sendNewJobEntry();
    } else {
      this.sendNewWorkerEntry();
    }
    this.router.navigateByUrl('/mypage');
  }
}
