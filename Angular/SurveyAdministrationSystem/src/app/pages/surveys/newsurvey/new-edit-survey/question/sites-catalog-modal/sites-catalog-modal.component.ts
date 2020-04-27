import { Component, OnInit, Inject, AfterViewInit, Renderer2 } from '@angular/core';
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

  sites: Array<Site> = new Array<Site>();
  backupSites: Array<Site> = new Array<Site>();
  siteSelected: Site = new Site();
  loadingSites: boolean = false;
  private idQuestion: number;

  constructor(
    public _matDialog: MatDialog,
    private _surveyCaptureServices: SurveyCaptureServices,
    private _sitesServices: SitesServices,
    public dialogRef: MatDialogRef<SitesCatalogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.idQuestion = data["idQuestion"];
  }

  ngOnInit() { 
    this.getSites();
    this.siteSelected = this._surveyCaptureServices.getSite(this.idQuestion);
  }

  ngAfterViewInit() { }

  getSites() {
    this.loadingSites = true;

    this._sitesServices.getAllActiveSites().subscribe(
      data => {
        this.sites = data;
        this.backupSites = this.sites;
        this.loadingSites = false;
      },
      error => {
        console.log(error);
        this.loadingSites = false;
      }
    );
  }

  close(accept: boolean) {
    if(accept) {
      this._surveyCaptureServices.setSiteToAnswer(this.idQuestion, this.siteSelected);
    }
    this._matDialog.closeAll();
  }

  selectSite(site: Site) {
    let currentSelectedRow = document.getElementsByClassName("active")[0];

    if(currentSelectedRow != undefined &&
      (currentSelectedRow.id != `Site_${site.siteId}`)) {
      currentSelectedRow.classList.toggle("active");
    }

    let newSelectedRow = document.getElementById(`Site_${site.siteId}`);
    newSelectedRow.classList.toggle("active");

    this.siteSelected = (newSelectedRow.classList.contains("active")) ? site : new Site();
  }

  search(siteName: string) {
    this.sites = new Array<Site>();

    for(let site of this.backupSites) {
      if(site.name.trim().toLowerCase().includes(siteName.trim().toLowerCase())) {
        this.sites.push(site);
      }
    }
  }
}