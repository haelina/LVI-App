import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.page.html',
  styleUrls: ['./mypage.page.scss'],
})
export class MypagePage implements OnInit {
  myData: FormGroup;

  constructor(
    private auth: Auth,
    private router: Router,
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

  ngOnInit() {
    //await getMyData();
    this.myData = this.formbuilder.group({
      company: ['Esimerkki Oy', [Validators.minLength(5)]],
      firstName: ['Jaakko', [Validators.required, Validators.minLength(2)]],
      lastName: ['Mikkonen', [Validators.required, Validators.minLength(2)]],
      address: ['Kuusitie 666', [Validators.minLength(5)]],
      zip: ['36100', [Validators.minLength(5), Validators.maxLength(5)]],
      city: ['Lempäälä', [Validators.minLength(2)]],
      phone: [
        '+358451288435',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],
      email: ['hanna@test.co', [Validators.required, Validators.email]],
    });
  }

  updateMyData() {
    console.log('clicked submit');
    console.log(this.myData.value);
  }
}
