import { Component, OnInit, Input } from '@angular/core';
import { SurveySummary } from 'src/app/models/survey-summary';
import Swal from 'sweetalert2';
import { SurveyServices } from 'src/app/services/survey-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menusummarysurvey',
  templateUrl: './menu-summary-survey.component.html',
  styleUrls: ['./menu-summary-survey.component.css']
})
export class MenuSummarySurveyComponent implements OnInit {

  @Input() surveyInput: SurveySummary;

  constructor(
    private _surveyServices: SurveyServices,
    private _router: Router
  ) { }

  ngOnInit() { }

  deleteSurvey(id: number) {

    Swal.fire({
      title: 'Eliminar',
      text: `¿Seguro que desea eliminar la encuesta ${this.surveyInput.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {

        this._surveyServices.deleteSurvey(id);
        
        Swal.fire({
          title: 'Encuesta eliminada',
          icon: 'success'
        });
      }
    });
  }

  goToEditQuestionText(idSurvey: number) {
    // [routerLink]="['/encuestas', surveyInput.id, 'idioma']"

    console.log(idSurvey);
    let surveyName = this._surveyServices.getSurveyName(idSurvey);
    console.log(surveyName);
    this._router.navigate(["/encuestas", idSurvey, "idioma"]);
  }
}
