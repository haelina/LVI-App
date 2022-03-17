import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modify-job',
  templateUrl: './modify-job.page.html',
  styleUrls: ['./modify-job.page.scss'],
})
export class ModifyJobPage implements OnInit {
  modifiedData: FormGroup;

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }
}
