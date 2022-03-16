import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { CalendarComponentOptions } from 'ion2-calendar';
import Userdetails from 'src/app/interfaces/Userdetails';
import WorkerEntry from 'src/app/interfaces/Workerentry';
import { FirestoreService } from 'src/app/services/firestore.service';
import * as moment from 'moment';
import TraineeEntry from 'src/app/interfaces/TraineeEntry';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.page.html',
  styleUrls: ['./mypage.page.scss'],
})
export class MypagePage implements OnInit {
  myData: FormGroup;
  userdetails: Userdetails;
  isLoading = true;
  newUser = true;
  workDetailsLoading = true;
  noWorkdetails = true;
  myWorkSearch: FormGroup;
  workerData: WorkerEntry;

  traineeData: FormGroup;
  traineeDetails: TraineeEntry;
  traineeDetailsLoading = true;
  noTraineedetails = true;

  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi',
    weekStart: 1,
    monthFormat: 'MMMM YYYY',
    showMonthPicker: false,
    weekdays: ['SU', 'MA', 'TI', 'KE', 'TO', 'PE', 'LA'],
    color: 'primary',
  };

  constructor(
    private router: Router,
    private firestore: FirestoreService,
    private formbuilder: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private auth: Auth,
    private toastController: ToastController
  ) {
    //console.log(auth.currentUser);
    //console.log(this.router.url);
  }

  /*
  get company() {
    return this.myData.get('company');
  }

  get firstName() {
    return this.myData.get('firstName');
  }

  get lastName() {
    return this.myData.get('lastName');
  }

  get address() {
    return this.myData.get('address');
  }

  get zip() {
    return this.myData.get('zip');
  }

  get city() {
    return this.myData.get('city');
  }

  get phone() {
    return this.myData.get('phone');
  }

  get email() {
    return this.myData.get('email');
  }
  */

  initializeForm(userDetails: Userdetails | null) {
    this.myData = this.formbuilder.group({
      company: [
        userDetails ? userDetails.company : '',
        [Validators.minLength(5)],
      ],
      firstName: [
        userDetails ? userDetails.firstName : '',
        [Validators.required, Validators.minLength(2)],
      ],
      lastName: [
        userDetails ? userDetails.lastName : '',
        [Validators.required, Validators.minLength(2)],
      ],
      address: [
        userDetails ? userDetails.address : '',
        [Validators.minLength(5)],
      ],
      zip: [
        userDetails ? userDetails.zip : '',
        [Validators.minLength(5), Validators.maxLength(5)],
      ],
      city: [userDetails ? userDetails.city : '', [Validators.minLength(2)]],
      phone: [
        userDetails ? userDetails.phone : '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],
      email: [
        userDetails ? userDetails.email : this.auth.currentUser.email,
        [Validators.required, Validators.email],
      ],
    });
    this.isLoading = false;
  }

  initializeWorkSearchForm(values: WorkerEntry | null) {
    this.myWorkSearch = this.formbuilder.group({
      locations: [values ? values.locations : []],
      dates: [values ? values.dates : []],
      details: [values ? values.details : ''],
      isTrainee: [false],
    });
    if (values) {
      this.optionsMulti.daysConfig = [];
      values.dates.forEach((date) => {
        const obj = {
          date,
          marked: true,
          cssClass: 'worker-calendar-marker',
        };
        this.optionsMulti.daysConfig.push();
      });
    }
    this.workDetailsLoading = false;
  }

  initializeTraineeForm(values: TraineeEntry | null) {
    this.traineeData = this.formbuilder.group({
      locations: [values ? values.locations : [], [Validators.required]],
      timing: [
        values ? values.timing : '',
        [Validators.required, Validators.minLength(5)],
      ],
      hasLicense: [values ? values.hasLicense : false],
      hasCar: [values ? values.hasCar : false],
      details: [
        values ? values.details : '',
        [Validators.required, Validators.minLength(5)],
      ],
    });
    this.traineeDetailsLoading = false;
  }

  async getUserDetails() {
    const found = await this.firestore.getUser();
    if (found) {
      this.userdetails = found;
      this.initializeForm(this.userdetails);
      this.newUser = false;
    } else {
      this.initializeForm(null);
      this.newUser = true;
    }
  }

  async getWorkerDetails() {
    const found = await this.firestore.getWorker();
    if (found) {
      this.workerData = found;
      this.noWorkdetails = false;
      this.initializeWorkSearchForm(this.workerData);
    } else {
      this.noWorkdetails = true;
      this.initializeWorkSearchForm(null);
    }
  }

  async getTraineeDetails() {
    //const found = null;
    const found = await this.firestore.getTrainee();
    if (found) {
      this.traineeDetails = found;
      this.noTraineedetails = false;
      this.initializeTraineeForm(this.traineeDetails);
    } else {
      this.noTraineedetails = true;
      this.initializeTraineeForm(null);
    }
  }

  ngOnInit() {
    this.getUserDetails();
    this.getWorkerDetails();
    this.getTraineeDetails();
  }

  updateMyData() {
    this.firestore.addUserdetail(this.myData.value);
    if (this.newUser) {
      this.newUser = false;
    }
    this.getUserDetails();
  }

  updateWorkSearch() {
    const formattedDates: string[] = [];
    this.myWorkSearch.value.dates.forEach((date) =>
      formattedDates.push(moment(date).format())
    );
    this.myWorkSearch.value.dates = formattedDates;
    console.log('updating work search');
    console.log(this.myWorkSearch.value);
    this.firestore.addWorker(this.myWorkSearch.value);
    if (this.noWorkdetails) {
      this.presentToastWithMessage(
        'Onnea työn löytämiseen. Ilmoituksesi on lisätty Työdiileriin.'
      );
    } else {
      this.presentToastWithMessage(
        'Onnea työn löytämiseen. Ilmoituksesi on päivitetty Työdiileriin.'
      );
    }
    this.workDetailsLoading = true;
    this.getWorkerDetails();
  }

  updateTraineeData() {
    console.log('trainee data sent');
    this.firestore.addTrainee(this.traineeData.value);
    if (this.noTraineedetails) {
      this.presentToastWithMessage(
        'Onnea harjoittelupaikan hakuun. Ilmoituksesi on lisätty Työdiileriin.'
      );
    } else {
      this.presentToastWithMessage(
        'Onnea harjoittelupaikan hakuun. Ilmoituksesi on päivitetty Työdiileriin.'
      );
    }
    this.traineeDetailsLoading = true;
    this.getTraineeDetails();
  }

  async presentToastWithMessage(message: string) {
    const toast = await this.toastController.create({
      message,
      color: 'danger',
      icon: 'sparkles',
      position: 'middle',
      duration: 3000,
      /*buttons: [
        {
          text: 'Ok!',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],*/
    });
    await toast.present();
  }
}
