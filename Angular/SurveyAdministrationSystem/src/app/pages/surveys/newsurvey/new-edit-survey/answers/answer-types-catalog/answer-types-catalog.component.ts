import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Answer } from 'src/app/models/answer';
import { AnswerServices } from 'src/app/services/answer-services';
import { Question } from 'src/app/models/question';
import { AreasServices } from 'src/app/services/areas-services';
import { Area } from 'src/app/models/area';
import { SurveyCaptureServices } from 'src/app/services/survey-capture.services';
import { AnswerType } from 'src/app/enums/class-enum';
import { DepartmentsServices } from 'src/app/services/departments.services';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-answer-types-catalog',
  templateUrl: './answer-types-catalog.component.html',
  styleUrls: ['./answer-types-catalog.component.css']
})
export class AnswerTypesCatalogComponent implements OnInit {

  public disablePredefined: boolean;
  public answers: Array<Answer>;
  public areas: Array<Area>;
  public idQuestionSelected: number;
  public answerName: string;
  public isAnswerTypeCatalogsVisible: boolean;
  public checkedAcceptNA: boolean;
  public checkedForceResponse: boolean;
  public justifyAnswerVisible: boolean;
  public areaSelected: Area;
  public departmentSelected: Department;
  public departments: Array<Department>;
  public selectAreaDisabled: boolean;

  @ViewChild("checkPredefinedAnswer", { read: ElementRef }) checkSingeAnswer: ElementRef;
  @ViewChild("checkFreeText", { read: ElementRef }) checkFreeText: ElementRef;
  @ViewChild("checkMultitpleOptions", { read: ElementRef }) checkMultipleOptions: ElementRef;
  @ViewChild("selectDepartment", { read: ElementRef }) selectDepartment: ElementRef;
  @ViewChild("selectArea", { read: ElementRef }) selectArea: ElementRef;

  constructor(
    private _surveyCaptureServices: SurveyCaptureServices,
    private _answerServices: AnswerServices,
    private _areasServices: AreasServices,
    private _renderer: Renderer2,
    private _departmentsServices: DepartmentsServices
  ) { }

  ngOnInit() {
    this.answerName = "";
    this.disablePredefined = false;
    this.isAnswerTypeCatalogsVisible = false;
    this.checkedAcceptNA = false;
    this.checkedForceResponse = false;
    this.justifyAnswerVisible = false;
    this.selectAreaDisabled = true;
    this.answers = new Array<Answer>();
    this.areaSelected = new Area();

    this._surveyCaptureServices.rowSelected.subscribe(idQuestion => {
      this.idQuestionSelected = idQuestion;
    });

    this._answerServices.answerSelected.subscribe((idQuestion: number) => {
      let question: Question = this._surveyCaptureServices.getQuestionById(idQuestion);
      this.setSelectedAnswer(question);
    });

    this._answerServices.showOptions.subscribe((visible: boolean) => {
      this.isAnswerTypeCatalogsVisible = visible;
    });

    this.answers = this._surveyCaptureServices.getAnswers();
    this.departments = this._departmentsServices.getAll();
  }

  showJustifyAnswerControl(visible: boolean) {
    this.justifyAnswerVisible = visible;
  }

  selectDefaultOption() {
    this.disablePredefined = true;
    this.answerName = "";

    if(this.checkFreeText != undefined && 
       this.checkFreeText.nativeElement != undefined && 
       this.checkFreeText.nativeElement.checked != undefined) {
      this.checkFreeText.nativeElement.checked = false;
    }
    
    if(this.checkMultipleOptions != undefined &&
       this.checkMultipleOptions.nativeElement != undefined &&
       this.checkMultipleOptions.nativeElement.checked != undefined) {
      this.checkMultipleOptions.nativeElement.checked = false;
    }
    
    if(this.checkSingeAnswer != undefined &&
       this.checkSingeAnswer.nativeElement != undefined &&
       this.checkSingeAnswer.nativeElement.checked != undefined) {
      this.checkSingeAnswer.nativeElement.checked = false;
    }

    this._renderer.removeClass(this.selectDepartment.nativeElement, "btn-info");
    this._renderer.removeClass(this.selectArea.nativeElement, "btn-info");

    this._renderer.addClass(this.selectDepartment.nativeElement, "btn-secondary");
    this._renderer.addClass(this.selectArea.nativeElement, "btn-secondary");
  }

  uncheckAllCheckbox() {
    this._renderer.setProperty(this.checkMultipleOptions.nativeElement, "checked", "false");
    this._renderer.setProperty(this.checkSingeAnswer.nativeElement, "checked", "false");
    this._renderer.setProperty(this.checkFreeText.nativeElement, "checked", "false");
  }

  setAnswerTypeSelected(answer: Answer) {
    if(answer.answerType == AnswerType.FreeText) {
      this._renderer.setProperty(this.checkFreeText.nativeElement, "checked", "true");
    }
    else if(answer.answerType == AnswerType.MultipleChoises) {
      this._renderer.setProperty(this.checkMultipleOptions.nativeElement, "checked", "true");
    }
    else if(answer.answerType == AnswerType.SingleAnswer) {
      this._renderer.setProperty(this.checkSingeAnswer.nativeElement, "checked", "true");
    }
  }

  setSelectedAnswer(question: Question) {
    let answer: Answer = question.answer;

    if(answer == undefined || answer.answerType == 0) {
      this.selectDefaultOption()
    }
    else {
      this.answerName = (answer.resumeName == undefined) ? "" : answer.resumeName;
      this.disablePredefined = !(answer.answerType == AnswerType.SingleAnswer);

      this.uncheckAllCheckbox();
      this.setAnswerTypeSelected(answer);
    }

    this.setDepartment(question.department);
    this.setArea(question.area);
  }

  setArea(area: Area) {
    this.areaSelected = area;

    if(this.areaSelected != undefined) {
      this._renderer.removeClass(this.selectArea.nativeElement, "btn-info");
      this._renderer.addClass(this.selectArea.nativeElement, "btn-info");
    }
  }

  setDepartment(department: Department) {
    this.departmentSelected = department;

    if(department != undefined) {
      this._renderer.removeClass(this.selectDepartment.nativeElement, "btn-info");
      this._renderer.addClass(this.selectDepartment.nativeElement, "btn-info");
    }
  }

  isQuestionSelected() {
    return (this.idQuestionSelected != undefined && this.idQuestionSelected != null);
  }

  onClickAnswerType(answerType: AnswerType) {
    if(this.isQuestionSelected()) {

      this.disablePredefined = (answerType != AnswerType.SingleAnswer);
      this._surveyCaptureServices.initializeAnswerObject(this.idQuestionSelected, answerType);

      if(answerType == AnswerType.MultipleChoises) {
        this._surveyCaptureServices.initializeAnswerOptions(this.idQuestionSelected)
      }

      this.justifyAnswerVisible = false;
    }
  }

  onSelectArea(area: Area) {
    this.areaSelected = area;
    this._surveyCaptureServices.setArea(this.idQuestionSelected, area);

    this._renderer.removeClass(this.selectArea.nativeElement, "btn-secondary");
    this._renderer.addClass(this.selectArea.nativeElement, "btn-info");
  }

  onSelectDepartment(department: Department) {
    this.departmentSelected = department;

    this._renderer.removeClass(this.selectDepartment.nativeElement, "btn-secondary");
    this._renderer.addClass(this.selectDepartment.nativeElement, "btn-info");

    this._surveyCaptureServices.setDepartment(this.idQuestionSelected, department);
    this.areas = this._areasServices.getAreasByDepartmentId(department.id);

    this.enableSelectArea();
  }

  enableSelectArea() {
    this.selectAreaDisabled = false;
    this.areaSelected = new Area();
    this._renderer.removeClass(this.selectArea.nativeElement, "btn-info");
    this._renderer.addClass(this.selectArea.nativeElement, "btn-secondary");
  }
}