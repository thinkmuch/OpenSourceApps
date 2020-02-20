import { Component, OnInit, ElementRef, ViewChild, ContentChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageServices } from 'src/app/services/language-services';
import { Language } from 'src/app/models/laguage';
import { SurveyServices } from 'src/app/services/survey-services';
import { QuestionsByLanguage } from 'src/app/models/questions-by-language';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-language',
  templateUrl: './add-language.component.html',
  styleUrls: ['./add-language.component.css']
})
export class AddLanguageComponent implements OnInit {

  surveyId: number;
  languages: Array<Language>;
  languageSelected: Language;
  defaultQuestions: QuestionsByLanguage;
  languageDefault: Language;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _languageServices: LanguageServices,
    private _surveyServices: SurveyServices,
    private _router: Router
  ) { 
    this.surveyId = parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
    this.defaultQuestions = this._surveyServices.getDefaultquestionById(this.surveyId);
    this.languages = this._languageServices.getAll();
  }

  ngOnInit() {
  }

  onSelectLanguage(language: Language) {
    this.languageSelected = language;
  }

  navigateTo(path: string) {
    this._router.navigate([path]);
  }

  saveQuestions(formQuestions: NgForm) {

    if(formQuestions.invalid) {
      Swal.fire(
        'Datos incompletos',
        'Debe capturar todas las preguntas',
        'warning'
      );
    }
    else {
      Swal.fire({
        icon: 'success',
        title: 'Preguntas guardadas',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this._router.navigate(["encuestas"]);
      });
    }
  }
}
