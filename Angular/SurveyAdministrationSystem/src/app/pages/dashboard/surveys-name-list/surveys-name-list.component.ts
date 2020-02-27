import { Component, OnInit, Input } from '@angular/core';
import { SurveySummary } from 'src/app/models/survey-summary';

@Component({
  selector: 'app-surveys-name-list',
  templateUrl: './surveys-name-list.component.html',
  styleUrls: ['./surveys-name-list.component.css']
})
export class SurveysNameListComponent implements OnInit {

  @Input('surveysInput') surveys: Array<SurveySummary>;
  
  constructor() { }

  ngOnInit() {
  }

}
