import { Component, OnInit, Input } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import JobEntry from 'src/app/interfaces/JobEntry';
import { ModifyJobPage } from 'src/app/pages/modify-job/modify-job.page';

@Component({
  selector: 'app-my-job-card',
  templateUrl: './my-job-card.component.html',
  styleUrls: ['./my-job-card.component.scss'],
})
export class MyJobCardComponent implements OnInit {
  @Input() job: JobEntry;

  constructor(
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {}

  ngOnInit() {}

  async openModal() {
    const modal = await this.modalController.create({
      component: ModifyJobPage,
      swipeToClose: true,
      cssClass: 'modify-job',
    });
    await modal.present();
  }
}
