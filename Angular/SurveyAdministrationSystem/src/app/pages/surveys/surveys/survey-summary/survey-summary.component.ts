import { Component, OnInit, Input } from '@angular/core';
import { SurveySummary } from '../../../../models/survey-summary';

@Component({
  selector: 'app-surveysummary',
  templateUrl: './survey-summary.component.html',
  styleUrls: ['./survey-summary.component.css']
})
export class SurveySummaryComponent implements OnInit {

  @Input() summaryInput: SurveySummary;

  constructor() { }

  ngOnInit() {
  }

}
