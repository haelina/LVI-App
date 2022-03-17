import { Component, OnInit, Input } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import JobEntry from 'src/app/interfaces/JobEntry';

@Component({
  selector: 'app-my-job-card',
  templateUrl: './my-job-card.component.html',
  styleUrls: ['./my-job-card.component.scss'],
})
export class MyJobCardComponent implements OnInit {
  @Input() job: JobEntry;
  modalOpen: false;

  constructor(private routerOutlet: IonRouterOutlet) {}

  ngOnInit() {}
}
