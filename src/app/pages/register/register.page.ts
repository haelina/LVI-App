import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  get passwordConfirmation() {
    return this.credentials.get('passwordConfirmation');
  }

  ngOnInit() {
    this.credentials = this.formbuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        passwordConfirmation: ['', [Validators.required]],
      },
      {
        validators: this.matchingPasswords.bind(this),
      }
    );
  }

  matchingPasswords(formGroup: FormGroup) {
    console.log('checking password match');
    const { value: password } = formGroup.get('password');
    const { value: passwordConfirmation } = formGroup.get(
      'passwordConfirmation'
    );
    console.log(password + passwordConfirmation);
    return password === passwordConfirmation
      ? null
      : { passwordNotMatch: true };
  }

  async register() {
    const loading = await this.loadingController.create();
    loading.present();
    const user = await this.authService.register(this.credentials.value);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/mypage', { replaceUrl: true });
    } else {
      this.showAlert('Registration failed', 'Please try again!');
    }
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
