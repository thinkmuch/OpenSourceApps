import { Component, OnInit, Input } from '@angular/core';
import { SurveySummary } from '../../../../models/SurveySummary';

@Component({
  selector: 'app-surveysummary',
  templateUrl: './surveysummary.component.html',
  styleUrls: ['./surveysummary.component.css']
})
export class SurveySummaryComponent implements OnInit {

  @Input() summaryInput: SurveySummary;

  constructor() { }

  ngOnInit() {
  }

}
