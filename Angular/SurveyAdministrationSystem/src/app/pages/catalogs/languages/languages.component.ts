import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
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
  @ViewChild('languageName', { read: ElementRef }) languageName: ElementRef;

  constructor(
    private _languageServices: LanguageServices,
    private _renderer: Renderer2
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

  edit(language: Language, row: HTMLElement) {
    this.languageSelected = language;
    this.inputNameDisabled = false;
    this.cancelButtonDisabled = false;
    this.saveButtonHidden = false;
    this.newButtonHidden = true;

    let rows = document.getElementsByClassName("selected");
    if(rows.length > 0) {
      rows[0].classList.remove("selected");
    }
    row.classList.add("selected");
  }

  cancel() {
    this.restartScreen();
  }

  onClickLanguageName() {
    this._renderer.removeClass(this.languageName.nativeElement, "alert-danger");
  }

  save(name: string) {

    if(name == undefined) {
      this._renderer.addClass(this.languageName.nativeElement, "alert-danger");

      Swal.fire({
        title: 'Datos incompletos',
        text: 'Debe capturar el nombre del idioma',
        icon: 'warning'
      });
    }
    else {
      this._languageServices.save(name)
      this.restartScreen();
      
      Swal.fire({
        title: 'Idioma registrado',
        icon: 'success'
      });
    }
  }

  restartScreen() {
    this.languageSelected = new Language();
    this.inputNameDisabled = true;
    this.cancelButtonDisabled = true;
    this.saveButtonHidden = true;
    this.newButtonHidden = false;

    let row = document.getElementsByClassName("selected");
    if(row.length > 0) {
      row[0].classList.remove("selected");
    }
  }

  setNew() {
    this.saveButtonHidden = false;
    this.cancelButtonDisabled = false;
    this.newButtonHidden = true;
    this.inputNameDisabled = false;
  }
}
