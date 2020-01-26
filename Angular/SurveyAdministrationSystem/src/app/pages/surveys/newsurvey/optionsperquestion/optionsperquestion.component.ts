import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-optionsperquestion',
  templateUrl: './optionsperquestion.component.html',
  styleUrls: ['./optionsperquestion.component.css']
})
export class OptionsPerQuestionComponent implements OnInit {

  isPredefinedChecked: boolean;

  constructor() { }

  ngOnInit() {
  }

  onChangeCheckPredefined(value: any) {
    this.isPredefinedChecked = value;
  }
}
