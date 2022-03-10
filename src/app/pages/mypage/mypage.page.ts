import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import Userdetails from 'src/app/interfaces/Userdetails';
import { FirestoreService } from 'src/app/services/firestore.service';

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

  constructor(
    private router: Router,
    private firestore: FirestoreService,
    private formbuilder: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private auth: Auth
  ) {
    //console.log(auth.currentUser);
    //console.log(this.router.url);
  }
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

  /*
  async fetchUserdetail() {
    await this.firestore.getUserDetail().subscribe((res) => {
      this.userdetails = res;

      this.myData = this.formbuilder.group({
        company: [this.userdetails.company, [Validators.minLength(5)]],
        firstName: [
          this.userdetails.firstName,
          [Validators.required, Validators.minLength(2)],
        ],
        lastName: [
          this.userdetails.lastName,
          [Validators.required, Validators.minLength(2)],
        ],
        address: [this.userdetails.address, [Validators.minLength(5)]],
        zip: [
          this.userdetails.zip,
          [Validators.minLength(5), Validators.maxLength(5)],
        ],
        city: [this.userdetails.city, [Validators.minLength(2)]],
        phone: [
          this.userdetails.phone,
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(20),
          ],
        ],
        email: [
          this.userdetails.email,
          [Validators.required, Validators.email],
        ],
      });
      this.isLoading = false;
    });
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

  ngOnInit() {
    this.getUserDetails();
    /*
    console.log(this.firestore.getUser());
    if (this.newUser) {
      this.myData = this.formbuilder.group({
        company: ['', [Validators.minLength(5)]],
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        address: ['', [Validators.minLength(5)]],
        zip: ['', [Validators.minLength(5), Validators.maxLength(5)]],
        city: ['', [Validators.minLength(2)]],
        phone: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(20),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
      });
    } else {
      this.fetchUserdetail();
    }

    */
  }

  updateMyData() {
    //console.log('clicked submit');

    this.firestore.addUserdetail(this.myData.value);
    if (this.newUser) {
      this.newUser = false;
    }
  }
}
