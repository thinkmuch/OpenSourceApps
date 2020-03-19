import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Language } from 'src/app/models/laguage';
import Swal from 'sweetalert2';
import { Status } from 'src/app/enums/class-enum';
import { LanguageServices } from 'src/app/services/language-services';

@Component({
  selector: 'app-languages-table',
  templateUrl: './languages-table.component.html',
  styleUrls: ['./languages-table.component.css']
})
export class LanguagesTableComponent implements OnInit {

  @Input("languagesInput") languages: Array<Language>;
  @Output() editEvent: EventEmitter<{ language: Language, row: HTMLElement }>;

  constructor(
    private _languageServices: LanguageServices
  ) { 
    this.editEvent = new EventEmitter<{ language: Language, row: HTMLElement }>();
  }

  ngOnInit() {
  }

  enable(language: Language) {
    Swal.fire({
      title: 'Activar',
      text: `¿Seguro que desea activar el idioma ${language.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, activar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {

        language.statusId = Status.Active;
        this._languageServices.update(language).subscribe(
        data => {
          Swal.fire({
            title: 'Idioma activado',
            icon: 'success'
          });
        },
        error => {
          console.log(error);
        });
      }
    });
  }

  disable(language: Language) {
    Swal.fire({
      title: 'Desactivar',
      text: `¿Seguro que desea desactivar el idioma ${language.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, desactivar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {

        language.statusId = Status.Inactive;
        this._languageServices.update(language).subscribe(
          data => {
            Swal.fire({
              title: 'Idioma desactivado',
              icon: 'success'
            });
          },
          error => {
            console.log(error);
          }
        );
      }
    });
  }

  edit(language: Language, row: HTMLElement) {
    this.editEvent.emit({
      language: language,
      row: row
    });
  }
}
