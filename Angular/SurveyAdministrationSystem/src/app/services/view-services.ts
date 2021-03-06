import { Injectable, ElementRef, Renderer2, RendererFactory2 } from '@angular/core';
import { Alerts } from '../enums/class-enum';
import { SurveyCaptureServices } from './survey-capture.services';

@Injectable({
  providedIn: 'root'
})
export class ViewServices {

  _questionControls: Array<ElementRef> = new Array<ElementRef>();
  private _languageControl: ElementRef;
  private _surveyNameControl: ElementRef;
  private _squaresControl: ElementRef;
  private _renderer: Renderer2 = this._rendererFactory.createRenderer(null, null);

  constructor(
    private _surveyCaptureServices: SurveyCaptureServices,
    private _rendererFactory: RendererFactory2,
  ) { }

  addControl(control: ElementRef) {
    this._questionControls.push(control);
  }

  set surveyNameControl(control: ElementRef) {
    this._surveyNameControl = control;
  }

  get SurveyNameControl() {
    return this._surveyNameControl.nativeElement;
  }

  set languageControl(control: ElementRef) {
    this._languageControl = control;
  }

  get LanguageControl() {
    return this._languageControl.nativeElement;
  }

  set squaresControl(control: ElementRef) {
    this._squaresControl = control;
  }

  get SquaresControl() {
    return this._squaresControl.nativeElement;
  }

  isHotelsCaptured(): boolean {
    let hotels = this._surveyCaptureServices.hotels;

    if(hotels == undefined || hotels.length == 0) {
      this._renderer.addClass(this._squaresControl.nativeElement, Alerts.Danger);
      return false;
    }

    return true;
  }
  
  isAllQuestionCaptured(): boolean {
    let isValidSurvey = true;

    this._questionControls.forEach(control => {
      if(control.nativeElement.value.length == 0) {
        isValidSurvey = false;
        this._renderer.addClass(control.nativeElement, Alerts.Danger);
      }
    });

    return isValidSurvey;
  }

  isLanguageSelected(): boolean {
    let result = true;
    let language = this._surveyCaptureServices.getLanguageSelected();

    if (language == undefined) {
      result = false;
      this.setInvalidControl(this.LanguageControl);
    }

    return result;
  }

  isSurveyNameCaptured(): boolean {
    let result: boolean = true;

    if(this.SurveyNameControl.value.length == 0) {
      result = false;
      this.setInvalidControl(this.SurveyNameControl);
    }

    return result;
  }

  setInvalidControl(control: any) {
    this._renderer.addClass(control, Alerts.Danger);
  }
}