import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { SitesServices } from 'src/app/services/sites-service';
import { Site } from 'src/app/models/site';
import Swal from 'sweetalert2';
import { Area } from 'src/app/models/area';
import { Status } from 'src/app/enums/class-enum';

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
  originalName: string;
  @ViewChild('siteName', { read: ElementRef }) siteName: ElementRef;
  
  constructor(
    private _sitesServices:SitesServices,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this.siteSelected = new Site();
    this.newButtonHidden = false;
    this.saveButtonHidden = true;
    this.cancelButtonHidden = true;
    this.inputNameDisabled = true;
    this.siteExist = false;
    this.originalName = "";

    this.sites = this._sitesServices.getAll();
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

  restartScreen() {
    if(this.siteSelected.id > 0) {
      this.siteSelected.name = this.originalName;
    }

    this.siteSelected = new Site();
    this.newButtonHidden = false;
    this.saveButtonHidden = true;
    this.cancelButtonHidden = true;
    this.inputNameDisabled = true;

    let selected = document.getElementsByClassName("selected");
    if(selected.length > 0) {
      selected[0].classList.remove("selected");
    }

    let alertDanger = document.getElementsByClassName("alert-danger");
    if(alertDanger.length > 0) {
      alertDanger[0].classList.remove("alert-danger");
    }
  }

  enable(site: Site) {

    Swal.fire({
      title: 'Activar',
      text: `¿Seguro que desea activar el sitio ${site.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, activar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {

        site.status = Status.Active;
        this._sitesServices.update(site);

        Swal.fire({
          title: 'Sitio activado',
          icon: 'success'
        });
      }
    });
  }

  disable(site: Site) {
    Swal.fire({
      title: 'Desactivar',
      text: `¿Seguro que desea desactivar el sitio ${site.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, desactivar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {

        site.status = Status.Inactive;
        this._sitesServices.update(site);
        
        Swal.fire({
          title: 'Sitio desactivado',
          icon: 'success'
        });
      }
    });
  }

  onClickSiteName() {
    this._renderer.removeClass(this.siteName.nativeElement, "alert-danger");
  }

  edit(site: Site, row: HTMLElement) {
    this.siteSelected = site;
    this.inputNameDisabled = false;
    this.cancelButtonHidden = false;
    this.saveButtonHidden = false;
    this.newButtonHidden = true;

    let rows = document.getElementsByClassName("selected");
    if(rows.length > 0) {
      rows[0].classList.remove("selected");
    }
    row.classList.add("selected");

    this.originalName = site.name;
  }

  save(name: string) {
    if(name == undefined || name.trim().length == 0) {
      this._renderer.addClass(this.siteName.nativeElement, "alert-danger");

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
