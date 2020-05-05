import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Renderer2, Input } from '@angular/core';
import { LanguageServices } from 'src/app/services/language-services';
import { Language } from 'src/app/models/laguage';
import { MatDialog } from '@angular/material';
import { ViewServices } from 'src/app/services/view-services';
import { Alerts } from 'src/app/enums/class-enum';
import { SurveyCaptureServices } from 'src/app/services/survey-capture.services';
import { SquareHotelCatalogComponent } from './square-hotel-catalog/square-hotel-catalog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {

  languages: Array<Language>;
  languageSelected: Language = new Language();
  loadingLanguages: boolean = false;
  @Input('isNewSurveyInput') isNewSurvey: boolean;
  @ViewChild("language", { read: ElementRef }) languageControl: ElementRef;
  @ViewChild("squaresAndHotels", { read: ElementRef }) suqaresControl: ElementRef;

  constructor(
    public _surveyCaprureServices: SurveyCaptureServices,
    private _languageServices: LanguageServices,
    public _matDialog: MatDialog,
    private _viewServices: ViewServices,
    private _render: Renderer2
  ) { }

  ngOnInit() { 
    this.getAllLanguages();

    if(!this.isNewSurvey) {
      if(this._surveyCaprureServices.language.languageId > 0) {
        this.languageSelected = this._surveyCaprureServices.language;
      }
    }
  }

  ngafterViewInit() {
    this._viewServices.squaresControl = this.suqaresControl;
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

  ngAfterViewInit() {
    this._viewServices.languageControl = this.languageControl;
    this._viewServices.squaresControl = this.suqaresControl;
  }

  onSelectLanguage(language: Language) {
    this.languageSelected = language;
    this._surveyCaprureServices.setLanguage(language);
  }

  onClickConfigSquareHotel() {
    this._render.removeClass(this.suqaresControl.nativeElement, Alerts.Danger);

    this._matDialog.open(SquareHotelCatalogComponent, {
      width: '900px',
      height: '500px',
      data: { }
    });
  }

  onClickLanguage() {
    this._render.removeClass(this.languageControl.nativeElement, Alerts.Danger);
  }
}
