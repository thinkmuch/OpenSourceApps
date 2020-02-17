import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { QuestionServices } from 'src/app/services/question-services';
import { LanguageServices } from 'src/app/services/language-services';
import { Language } from 'src/app/models/laguage';
import { MatDialog } from '@angular/material';
import { SquareHotelCatalogModalComponent } from './square-hotel-catalog-modal/square-hotel-catalog-modal.component';
import { ViewServices } from 'src/app/services/view-services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {

  public languages: Array<Language>;
  public languageSelected: string;
  @ViewChild("language", { read: ElementRef }) language: ElementRef;

  constructor(
    public _questionServices: QuestionServices,
    private _languageServices: LanguageServices,
    public _matDialog: MatDialog,
    private _viewServices: ViewServices,
    private render: Renderer2
  ) { 
    this.languages = this._languageServices.getAll();
    this.languageSelected = "";
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this._viewServices.languageControl = this.language;
  }

  onSelectLanguage(language: Language) {
    this.render.removeClass(this.language.nativeElement, "alert-danger");
    this.languageSelected = language.language;
    this._questionServices.setLanguage(language);
  }

  onClickConfigSquareHotel() {
    this._matDialog.open(SquareHotelCatalogModalComponent, {
      width: '900px',
      data: { }
    });
  }
}
