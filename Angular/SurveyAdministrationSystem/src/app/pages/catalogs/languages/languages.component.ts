import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/models/laguage';
import { LanguageServices } from 'src/app/services/language-services';
import { Status } from 'src/app/enums/class-enum';
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
  cancelButtonDisabled: boolean;
  newButtonHidden: boolean;

  constructor(
    private _languageServices: LanguageServices
  ) { }

  ngOnInit() {
    this.saveButtonHidden = true;
    this.cancelButtonDisabled = true;
    this.inputNameDisabled = true;
    this.newButtonHidden = false;
    this.languageSelected = new Language();
    this.languages = this._languageServices.getAll();
  }

  enable(language: Language) {

    Swal.fire({
      title: 'Activar',
      text: `¿Seguro que desea activar el idioma ${language.language}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, activar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {

        language.status = Status.Active;
        this._languageServices.update(language);

        Swal.fire({
          title: 'Idioma activado',
          icon: 'success'
        });
      }
    });
  }

  disable(language: Language) {

    Swal.fire({
      title: 'Desactivar',
      text: `¿Seguro que desea desactivar el idioma ${language.language}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, desactivar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {

        language.status = Status.Inactive;
        this._languageServices.update(language);
        
        Swal.fire({
          title: 'Idioma desactivado',
          icon: 'success'
        });
      }
    });
  }

  edit(language: Language) {
    this.languageSelected = language;
    this.inputNameDisabled = false;
    this.cancelButtonDisabled = false;
    this.saveButtonHidden = false;
    this.newButtonHidden = true;
  }

  cancel() {
    this.restartScreen();
  }

  save() {
    this._languageServices.update(this.languageSelected);
    this.restartScreen();
  }

  restartScreen() {
    this.languageSelected = new Language();
    this.inputNameDisabled = true;
    this.cancelButtonDisabled = true;
    this.saveButtonHidden = true;
    this.newButtonHidden = false;
  }

  setNew() {
    this.saveButtonHidden = false;
    this.cancelButtonDisabled = false;
    this.newButtonHidden = true;
    this.inputNameDisabled = false;
  }
}
