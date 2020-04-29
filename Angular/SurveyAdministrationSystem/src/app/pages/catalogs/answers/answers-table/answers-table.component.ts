import { Component, OnInit, Input } from '@angular/core';
import { Answer_2 } from 'src/app/models/answer_2';
import Swal from 'sweetalert2';
import { Status } from 'src/app/enums/class-enum';

@Component({
  selector: 'app-answers-table',
  templateUrl: './answers-table.component.html',
  styleUrls: ['./answers-table.component.css']
})
export class AnswersTableComponent implements OnInit {
  
  @Input("answersInput") answers: Array<Answer_2>;

  constructor() { }

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
        answer.status = Status.Active;
        this.update(answer);
      }
    });
  }

  update(answer: Answer_2) {
    
  }

  onClickDisable() {
    console.log("onClickDisable");
  }

  onClickEdit() {
    console.log("onClickEdit");
  }

  onClickDelete() {
    console.log("onClickDelete");
  }
}
