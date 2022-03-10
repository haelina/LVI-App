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

  constructor(
    private router: Router,
    private firestore: FirestoreService,
    private formbuilder: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController
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

  ngOnInit() {
    this.fetchUserdetail();
  }

  updateMyData() {
    //console.log('clicked submit');
    //console.log(this.myData.value);
    this.firestore.addUserdetail(this.myData.value);
  }
}
