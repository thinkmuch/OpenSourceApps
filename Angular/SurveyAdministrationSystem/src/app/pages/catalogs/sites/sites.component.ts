import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { SitesServices } from 'src/app/services/sites-service';
import { Site } from 'src/app/models/site';
import Swal from 'sweetalert2';
import { Area } from 'src/app/models/area';
import { Status, Alerts } from 'src/app/enums/class-enum';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  sites: Array<Site>;
  siteSelected: Site;
  newButtonHidden: boolean;
  saveButtonHidden: boolean;
  cancelButtonHidden: boolean;
  inputNameDisabled: boolean;
  siteExist: boolean;
  @ViewChild('siteName', { read: ElementRef }) siteName: ElementRef;
  
  constructor(
    private _sitesServices:SitesServices,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this.restartScreen();
    this.sites = this._sitesServices.getAll();
  }

  restartScreen() {
    this.siteSelected = new Site();
    this.newButtonHidden = false;
    this.saveButtonHidden = true;
    this.cancelButtonHidden = true;
    this.inputNameDisabled = true;
    this.siteExist = false;

    this.deselectAllRows();

    let alertDanger = document.getElementsByClassName(Alerts.Danger);
    if(alertDanger.length > 0) {
      alertDanger[0].classList.remove(Alerts.Danger);
    }
  }

  enableEditControls() {
    this.saveButtonHidden = false;
    this.cancelButtonHidden = false;
    this.inputNameDisabled = false;
    this.newButtonHidden = true;
  }

  cancel() {
    this.restartScreen();
  }

  onClickSiteName() {
    this._renderer.removeClass(this.siteName.nativeElement, Alerts.Danger);
  }

  edit($event) {
    let site = $event['site'];
    let row = $event['row'];

    this.siteSelected = JSON.parse(JSON.stringify(site));
    this.inputNameDisabled = false;
    this.cancelButtonHidden = false;
    this.saveButtonHidden = false;
    this.newButtonHidden = true;

    this.deselectAllRows();
    this.selectRow(row);
  }

  selectRow(row: HTMLElement) {
    row.classList.add("selected");
  }

  deselectAllRows() {
    let rows = document.getElementsByClassName("selected");
    if(rows.length > 0) {
      rows[0].classList.remove("selected");
    }
  }

  onKeyUpSiteName(name: string) {
    if(name.length > 0) {
      this.siteExist = this._sitesServices.exist(name);
    }
    else {
      this.siteExist = false;
    }
  }

  save(name: string) {
    if(name == undefined || name.trim().length == 0) {
      this._renderer.addClass(this.siteName.nativeElement, Alerts.Danger);

      Swal.fire({
        title: 'Datos incompletos',
        text: 'Debe capturar el nombre del sitio',
        icon: 'warning'
      });
    }
    else {
      if(this.siteSelected.id > 0) {
        this._sitesServices.update(this.siteSelected);
      }
      else {
        this._sitesServices.save(name);
      }
      
      this.sites = this._sitesServices.getAll();
      this.restartScreen();
      
      Swal.fire({
        title: 'Sitio registrado',
        icon: 'success'
      });
    }
  }
}
