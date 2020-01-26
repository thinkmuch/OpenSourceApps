import { Component, OnInit, Input } from '@angular/core';
import { SurveySummary } from 'src/app/models/SurveySummary';
import Swal from 'sweetalert2';
import { SurveyServices } from 'src/app/services/SurveyServices';

@Component({
  selector: 'app-menusummarysurvey',
  templateUrl: './menusummarysurvey.component.html',
  styleUrls: ['./menusummarysurvey.component.css']
})
export class MenuSummarySurveyComponent implements OnInit {

  @Input() surveyInput: SurveySummary;

  constructor(private _surveyServices: SurveyServices) { }

  ngOnInit() {
  }

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

}
