import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import JobEntry from 'src/app/interfaces/JobEntry';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-modify-job',
  templateUrl: './modify-job.page.html',
  styleUrls: ['./modify-job.page.scss'],
})
export class ModifyJobPage implements OnInit {
  @Input() job: JobEntry;
  modifiedData: FormGroup;
  formLoading = true;

  constructor(
    private modalController: ModalController,
    private firestore: FirestoreService,
    private formbuilder: FormBuilder,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.initializeJobForm(this.job);
  }

  initializeJobForm(job: JobEntry) {
    this.modifiedData = this.formbuilder.group({
      uid: [job.uid],
      locations: [job.locations],
      timing: [job.timing, [Validators.required, Validators.minLength(2)]],
      address: [job.address, [Validators.minLength(2)]],
      duration: [job.duration, [Validators.minLength(2)]],
      details: [job.details, [Validators.required, Validators.minLength(2)]],
    });
    this.formLoading = false;
  }

  closeModal() {
    this.modalController.dismiss();
  }

  sendModifiedJob() {
    console.log('sending data');
    this.closeModal();
    this.presentToastWithMessage(
      'Onnea tekijän löytämiseen. Ilmoituksesi on päivitetty Työdiileriin.'
    );
  }

  async presentToastWithMessage(message: string) {
    const toast = await this.toastController.create({
      message,
      color: 'danger',
      icon: 'sparkles',
      position: 'middle',
      duration: 3000,
    });
    await toast.present();
  }
}
