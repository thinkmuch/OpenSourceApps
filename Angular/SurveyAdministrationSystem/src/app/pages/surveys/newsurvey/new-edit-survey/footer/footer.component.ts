import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { QuestionServices } from 'src/app/services/question-services';
import { LanguageServices } from 'src/app/services/language-services';
import { Language } from 'src/app/models/laguage';
import { MatDialog } from '@angular/material';
import { SquareHotelCatalogModalComponent } from './square-hotel-catalog-modal/square-hotel-catalog-modal.component';
import { ViewServices } from 'src/app/services/view-services';
import { Alerts } from 'src/app/enums/class-enum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {

  public languages: Array<Language>;
  public languageSelected: string;
  @ViewChild("language", { read: ElementRef }) languageControl: ElementRef;
  @ViewChild("squaresAndHotels", { read: ElementRef }) suqaresControl: ElementRef;

  constructor(
    public _questionServices: QuestionServices,
    private _languageServices: LanguageServices,
    public _matDialog: MatDialog,
    private _viewServices: ViewServices,
    private _render: Renderer2
  ) { 
    this.languageSelected = "";
    this.languages = this._languageServices.getAll();
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this._viewServices.languageControl = this.languageControl;
    this._viewServices.squaresControl = this.suqaresControl;
  }

  onSelectLanguage(language: Language) {
    this.languageSelected = language.language;
    this._questionServices.setLanguage(language);
  }

  onClickConfigSquareHotel() {
    this._render.removeClass(this.suqaresControl.nativeElement, Alerts.Danger);

    this._matDialog.open(SquareHotelCatalogModalComponent, {
      width: '900px',
      data: { }
    });
  }

  onClickLanguage() {
    this._render.removeClass(this.languageControl.nativeElement, Alerts.Danger);
  }
}
