import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Language } from 'src/app/models/laguage';
import { SurveyCaptureServices } from 'src/app/services/survey-capture.services';
import { LanguageServices } from 'src/app/services/language-services';
import { Alerts } from 'src/app/enums/class-enum';
import { ViewServices } from 'src/app/services/view-services';

@Component({
  selector: 'app-dropdown-language',
  templateUrl: './dropdown-language.component.html',
  styleUrls: ['./dropdown-language.component.css']
})
export class DropdownLanguageComponent implements OnInit, AfterViewInit {
  languageSelected: Language = new Language();
  loadingLanguages: boolean = false;
  languages: Array<Language> = new Array<Language>();
  @ViewChild("language", { read: ElementRef }) languageControl: ElementRef;

  constructor(
    private _surveyCaprureServices: SurveyCaptureServices,
    private _languageServices: LanguageServices,
    private _renderer: Renderer2,
    private _viewServices: ViewServices
  ) { }

  ngOnInit() {
    this.getAllLanguages();
  }

  ngAfterViewInit() {
    this._viewServices.languageControl = this.languageControl;
  }

  onSelectLanguage(language: Language) {
    this.languageSelected = language;
    this._surveyCaprureServices.setLanguage(language);
  }

  getAllLanguages() {
    this.loadingLanguages = true;
    this._languageServices.getAllActiveLanguages().subscribe(
      data => {
        this.languages = data;
        this.loadingLanguages = false;
      },
      error => {
        console.log(error);
        this.loadingLanguages = false;
      }
    );
  }

  onClickLanguage() {
    this._renderer.removeClass(this.languageControl.nativeElement, Alerts.Danger);
  }
}
