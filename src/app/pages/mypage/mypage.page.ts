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

  async ngOnInit() {
    //await getMyData();
    this.myData = this.formbuilder.group({
      company: ['Esimerkki Oy', [Validators.minLength(5)]],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      address: ['', [Validators.minLength(5)]],
      zip: ['', [Validators.maxLength(5), Validators.maxLength(5)]],
      city: ['', [Validators.minLength(2)]],
      phone: [
        '',
        [Validators.required],
        Validators.minLength(5),
        Validators.maxLength(20),
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  updateMyData() {
    console.log('clicked submit');
    console.log(this.myData.value);
  }
}
