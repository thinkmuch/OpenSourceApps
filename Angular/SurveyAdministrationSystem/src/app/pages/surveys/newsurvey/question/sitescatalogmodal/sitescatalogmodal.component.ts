import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { QuestionServices } from 'src/app/services/QuestionServices';
import { Site } from 'src/app/models/Site';

@Component({
  selector: 'app-sitescatalogmodal',
  templateUrl: './sitescatalogmodal.component.html',
  styleUrls: ['./sitescatalogmodal.component.css']
})
export class SitesCatalogModalComponent implements OnInit {

  constructor(
    public _matDialog: MatDialog,
    private _questionServices: QuestionServices
  ) { }

  ngOnInit() {
  }

  close(accept: boolean) {
    this._matDialog.closeAll();
  }
}
