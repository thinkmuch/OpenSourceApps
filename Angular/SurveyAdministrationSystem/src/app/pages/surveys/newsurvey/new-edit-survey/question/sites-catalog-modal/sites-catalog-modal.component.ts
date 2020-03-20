import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Site } from 'src/app/models/site';
import { SitesServices } from 'src/app/services/sites-service';
import { SurveyCaptureServices } from 'src/app/services/survey-capture.services';

@Component({
  selector: 'app-sitescatalogmodal',
  templateUrl: './sites-catalog-modal.component.html',
  styleUrls: ['./sites-catalog-modal.component.css']
})
export class SitesCatalogModalComponent implements OnInit, AfterViewInit {

  public sites: Array<Site>;
  public siteSelected: Site;
  private idQuestion: number;

  constructor(
    public _matDialog: MatDialog,
    private _surveyCaptureServices: SurveyCaptureServices,
    private _sitesServices: SitesServices,
    public dialogRef: MatDialogRef<SitesCatalogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.siteSelected = new Site();
    //this.sites = this._sitesServices.getAll();
    this.idQuestion = data["idQuestion"];
  }

  ngOnInit() { }

  ngAfterViewInit() {
    let site = this._surveyCaptureServices.getSite(this.idQuestion);

    if(site != undefined && site.siteId > 0) {
      this.selectSite(site, true);
      document.getElementById(`Site_${site.siteId}`).scrollIntoView();
    }
  }

  close(accept: boolean) {
    if(accept) {
      this._surveyCaptureServices.setSiteToAnswer(this.idQuestion, this.siteSelected);
    }
    this._matDialog.closeAll();
  }

  selectSite(site: Site, checked: boolean) {
    let currentSelectedRow = document.getElementsByClassName("active")[0];

    if(currentSelectedRow != undefined &&
      (currentSelectedRow.id != `Site_${site.siteId}`)) {
      currentSelectedRow.classList.toggle("active");
    }

    let newSelectedRow = document.getElementById(`Site_${site.siteId}`);
    newSelectedRow.classList.toggle("active");

    this.siteSelected = (newSelectedRow.classList.contains("active")) ? site : new Site();
  }
}