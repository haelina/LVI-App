import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modify-job',
  templateUrl: './modify-job.page.html',
  styleUrls: ['./modify-job.page.scss'],
})
export class ModifyJobPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }
}
