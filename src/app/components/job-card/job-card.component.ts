import { Component, Input, OnInit } from '@angular/core';
import JobEntry from 'src/app/interfaces/JobEntry';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent implements OnInit {
  @Input() job: JobEntry;
  showContact = false;

  constructor() {}

  ngOnInit() {}
}
