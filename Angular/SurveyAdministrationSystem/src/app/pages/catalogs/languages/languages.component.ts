import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Language } from 'src/app/models/laguage';
import { LanguageServices } from 'src/app/services/language-services';
import { Alerts } from 'src/app/enums/class-enum';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  languages: Array<Language>
  languageSelected: Language;
  inputNameDisabled: boolean;
  saveButtonHidden: boolean;
  cancelButtonHidden: boolean;
  newButtonHidden: boolean;
  languageExist: boolean;
  loading: boolean = false;
  @ViewChild('languageName', { read: ElementRef }) languageName: ElementRef;

  constructor(
    private _languageServices: LanguageServices,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this.restartScreen();
    this.loading = true;
    this.getAllLanguages();
  }

  restartScreen() {
    this.languageSelected = new Language();
    this.inputNameDisabled = true;
    this.cancelButtonHidden = true;
    this.saveButtonHidden = true;
    this.newButtonHidden = false;
    this.languageExist = false;

    this.deselectAllRows();

    let alertDanger = document.getElementsByClassName(Alerts.Danger);
    if(alertDanger.length > 0) {
      alertDanger[0].classList.remove(Alerts.Danger);
    }
  }

  deselectAllRows() {
    let selected = document.getElementsByClassName("selected");
    if(selected.length > 0) {
      selected[0].classList.remove("selected");
    }
  }

  selectRow(row: HTMLElement) {
    row.classList.add("selected");
  }

  edit($event) {
    let language = $event['language'];
    let row = $event['row'];

    this.languageSelected = JSON.parse(JSON.stringify(language));
    
    this.enableEditControls()
    this.deselectAllRows();
    this.selectRow(row);
  }

  enableEditControls() {
    this.saveButtonHidden = false;
    this.cancelButtonHidden = false;
    this.newButtonHidden = true;
    this.inputNameDisabled = false;
  }

  cancel() {
    this.restartScreen();
  }

  onClickLanguageName() {
    this._renderer.removeClass(this.languageName.nativeElement, Alerts.Danger);
  }

  onKeyUpLanguageName(name: string) {
    if(name.length > 0) {
      this.languageExist = this._languageServices.exist(name);
    }
    else {
      this.languageExist = false;
    }
  }

  getAllLanguages() {
    this._languageServices.getAll().subscribe(
      data => {
        this.languages = data
        this.loading = false;
        this.restartScreen();
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  save(name: string) {
    if(name == undefined || name.length == 0) {
      this._renderer.addClass(this.languageName.nativeElement, Alerts.Danger);

      Swal.fire({
        title: 'Datos incompletos',
        text: 'Debe capturar el nombre del idioma',
        icon: 'warning'
      });
    }
    else {
      if(this.languageSelected.languageId > 0) {
        this._languageServices.update(this.languageSelected).subscribe(
          data => {
            this.getAllLanguages();
          },
          error => {
            console.log(error);
          }
        )
      }
      else {
        this._languageServices.save(name).subscribe(
        data => {
          this.getAllLanguages();
        },
        error => {
          console.log(error);
        });
      }
    }
  }
}