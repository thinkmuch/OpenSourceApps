import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Language } from 'src/app/models/laguage';
import { LanguageServices } from 'src/app/services/language-services';
import { Status, Alerts } from 'src/app/enums/class-enum';
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
  languageExist: boolean;
  @ViewChild('languageName', { read: ElementRef }) languageName: ElementRef;

  constructor(
    private _languageServices: LanguageServices,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this.restartScreen();
    this.languages = this._languageServices.getAll();
  }

  restartScreen() {
    this.languageSelected = new Language();
    this.inputNameDisabled = true;
    this.cancelButtonDisabled = true;
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

  selectRow(row: HTMLElement) {
    row.classList.add("selected");
  }

  edit(language: Language, row: HTMLElement) {
    this.languageSelected = JSON.parse(JSON.stringify(language));
    
    this.enableEditControls()
    this.deselectAllRows();
    this.selectRow(row);
  }

  enableEditControls() {
    this.saveButtonHidden = false;
    this.cancelButtonDisabled = false;
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
      if(this.languageSelected.id > 0) {
        this._languageServices.update(this.languageSelected);
      }
      else {
        this._languageServices.save(name);
      }
      
      this.languages = this._languageServices.getAll();
      this.restartScreen();
      
      Swal.fire({
        title: 'Idioma registrado',
        icon: 'success'
      });
    }
  }
}