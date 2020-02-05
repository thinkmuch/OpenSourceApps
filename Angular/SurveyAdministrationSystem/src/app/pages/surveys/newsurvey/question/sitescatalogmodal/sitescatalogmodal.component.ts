import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { QuestionServices } from 'src/app/services/QuestionServices';
import { Site } from 'src/app/models/Site';
import { SitesServices } from 'src/app/services/SitesService';

@Component({
  selector: 'app-sitescatalogmodal',
  templateUrl: './sitescatalogmodal.component.html',
  styleUrls: ['./sitescatalogmodal.component.css']
})
export class SitesCatalogModalComponent implements OnInit {

  public sites: Array<Site>;
  public siteSelected: Site;
  private idQuestion: number = 1;

  constructor(
    public _matDialog: MatDialog,
    private _questionServices: QuestionServices,
    private _sitesServices: SitesServices
  ) { 
    this.siteSelected = new Site();
    this.sites = this._sitesServices.getAll();
  }

  ngOnInit() { }

  close(accept: boolean) {

    if(accept) {
      this._questionServices.setSiteToAnswer(this.idQuestion, this.siteSelected);
    }

    this._matDialog.closeAll();
  }

  selectSite(site: Site) {

    this.siteSelected = site;

    let currentSelectedRow = document.getElementsByClassName("active")[0];
    if(currentSelectedRow != undefined) {
      currentSelectedRow.classList.toggle("active");
    }

    let newSelectedRow = document.getElementById(`Site_${site.id}`);
    newSelectedRow.classList.toggle("active");
  }
}
