import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QuestionServices } from 'src/app/services/QuestionServices';
import { Site } from 'src/app/models/Site';
import { SitesServices } from 'src/app/services/SitesService';

@Component({
  selector: 'app-sitescatalogmodal',
  templateUrl: './sitescatalogmodal.component.html',
  styleUrls: ['./sitescatalogmodal.component.css']
})
export class SitesCatalogModalComponent implements OnInit, AfterViewInit {

  public sites: Array<Site>;
  public siteSelected: Site;
  private idQuestion: number;

  constructor(
    public _matDialog: MatDialog,
    private _questionServices: QuestionServices,
    private _sitesServices: SitesServices,
    public dialogRef: MatDialogRef<SitesCatalogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.siteSelected = new Site();
    this.sites = this._sitesServices.getAll();
    this.idQuestion = data["idQuestion"];
  }

  ngOnInit() { }

  ngAfterViewInit() {
    let site = this._questionServices.getSite(this.idQuestion);

    if(site != undefined && site.id > 0) {
      this.selectSite(site);
      document.getElementById(`Site_${site.id}`).scrollIntoView();
    }
  }

  close(accept: boolean) {
    if(accept) {
      this._questionServices.setSiteToAnswer(this.idQuestion, this.siteSelected);
    }
    this._matDialog.closeAll();
  }

  selectSite(site: Site) {

    let currentSelectedRow = document.getElementsByClassName("active")[0];

    if(currentSelectedRow != undefined &&
      (currentSelectedRow.id != `Site_${site.id}`)) {
      currentSelectedRow.classList.toggle("active");
    }

    let newSelectedRow = document.getElementById(`Site_${site.id}`);
    newSelectedRow.classList.toggle("active");

    this.siteSelected = (newSelectedRow.classList.contains("active")) ? site : new Site();
  }
}