import { Component, OnInit } from '@angular/core';
import { QuestionServices } from 'src/app/services/question-services';
import { LanguageServices } from 'src/app/services/language-services';
import { Language } from 'src/app/models/laguage';
import { MatDialog } from '@angular/material';
import { SquareHotelCatalogModalComponent } from './square-hotel-catalog-modal/square-hotel-catalog-modal.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public languages: Array<Language>;
  public languageSelected: string;

  constructor(
    public _questionServices: QuestionServices,
    private _languageServices: LanguageServices,
    public _matDialog: MatDialog
  ) { 
    this.languages = this._languageServices.getAll();
    this.languageSelected = "";
  }

  ngOnInit() { }

  onSelectLanguage(language: Language) {
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
