import { Component, OnInit, Input } from '@angular/core';
import { Answer_2 } from 'src/app/models/answer_2';
import Swal from 'sweetalert2';
import { Status } from 'src/app/enums/class-enum';
import { AnswerServices } from 'src/app/services/answer-services';
import { Alert } from 'src/app/util/Alert';

@Component({
  selector: 'app-answers-table',
  templateUrl: './answers-table.component.html',
  styleUrls: ['./answers-table.component.css']
})
export class AnswersTableComponent implements OnInit {
  
  @Input("answersInput") answers: Array<Answer_2>;

  constructor(
    private _answerServices: AnswerServices
  ) { }

  ngOnInit() { }

  onClickEnable(answer: Answer_2) {
    Swal.fire({
      title: 'Activar',
      text: `¿Seguro que desea activar la respuesta ${answer.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, activar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {
        
        answer.statusId = Status.Active;
        this._answerServices.update(answer).subscribe(
          data => {
            Alert.success("Idioma activado");
          },
          error => {
            console.log(error);
          }
        );
      }
    });
  }

  onClickDisable(answer: Answer_2) {
    Swal.fire({
      title: 'Desactivar',
      text: `¿Seguro que desea desactivar la respuesta ${answer.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, desactivar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {

      if(response.value) {

        answer.statusId = Status.Inactive;
        this._answerServices.update(answer).subscribe(
          data => {
            Alert.success("Idioma desactivado");
          },
          error => {
            console.log(error);
          }
        );
      }
    });
  }

  onClickEdit() {
    console.log("onClickEdit");
  }

  onClickDelete() {
    console.log("onClickDelete");
  }
}
