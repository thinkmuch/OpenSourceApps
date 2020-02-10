import { Component, OnInit } from '@angular/core';
import { QuestionServices } from 'src/app/services/question-services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    public _questionServices: QuestionServices
  ) { }

  ngOnInit() { }

}
