import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import JobEntry from 'src/app/interfaces/JobEntry';
import { ModifyJobPage } from 'src/app/pages/modify-job/modify-job.page';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-my-job-card',
  templateUrl: './my-job-card.component.html',
  styleUrls: ['./my-job-card.component.scss'],
})
export class MyJobCardComponent implements OnInit {
  @Input() job: JobEntry;

  constructor(
    private modalController: ModalController,
    private firestore: FirestoreService
  ) {}

  ngOnInit() {}

  async deleteJob() {
    this.firestore.deleteJobEnty(this.job.id);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModifyJobPage,
      showBackdrop: true,
      backdropDismiss: true,
      cssClass: 'modify-job',
      componentProps: {
        job: this.job,
      },
    });
    await modal.present();
  }
}
