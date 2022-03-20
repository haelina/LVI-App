import { Component, Input, OnInit } from '@angular/core';
import TraineeEntry from 'src/app/interfaces/TraineeEntry';

@Component({
  selector: 'app-trainee-card',
  templateUrl: './trainee-card.component.html',
  styleUrls: ['./trainee-card.component.scss'],
})
export class TraineeCardComponent implements OnInit {
  @Input() trainee: TraineeEntry;

  constructor() {}

  ngOnInit() {}
}
