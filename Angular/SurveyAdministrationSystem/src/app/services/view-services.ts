import { Injectable, ElementRef, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewServices {

  public viewControls: Array<ElementRef>;
  public languageControl: ElementRef;
  public surveyName: ElementRef;

  constructor() { 
    this.viewControls = new Array<ElementRef>();
  }

  addControl(control: ElementRef) {
    this.viewControls.push(control);
  }

  getQuestionControls(): Array<ElementRef> {
    return this.viewControls;
  }

  getSurveyNameControl(): ElementRef {
    return this.surveyName;
  }
}