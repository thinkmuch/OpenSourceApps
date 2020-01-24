import { Component, OnInit, Input } from '@angular/core';
import { SurveySummary } from '../../../../models/surevysummary';

@Component({
  selector: 'app-surveysummary',
  templateUrl: './surveysummary.component.html',
  styleUrls: ['./surveysummary.component.css']
})
export class SurveysummaryComponent implements OnInit {

  @Input() summaryInput: SurveySummary;

  constructor() { }

  ngOnInit() {
  }

}
