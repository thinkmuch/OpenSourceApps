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
  loading: boolean;
  @ViewChild('siteName', { read: ElementRef }) siteName: ElementRef;
  
  constructor(
    private _sitesServices:SitesServices,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    this.restartScreen();
    this.getAllSites();
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

  getAllSites() {
    this.loading = true;
    this._sitesServices.getAll().subscribe(
      data => {
        this.sites = data;
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
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
    if(name.length > 0 && this.sites != undefined && this.sites.length > 0) {
       this.siteExist = (this.sites.find(s => s.name.trim().toLocaleLowerCase() == name.trim().toLowerCase()) != undefined);
    }
    else {
      this.siteExist = false;
    }
  }

  saveSite(name: string) {
    this._sitesServices.save(name).subscribe(
      data => {
        this.restartScreen();
        this.getAllSites();
        Swal.fire({
          title: 'Sitio registrado',
          icon: 'success'
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  update(site: Site) {
    this._sitesServices.update(site).subscribe(
    data => {
        this.restartScreen();
        this.getAllSites();

        Swal.fire({
          title: 'Sitio actualizado',
          icon: 'success'
        });
    },
    error => {
      console.log(error);
    });
  }

  save(name: string) {
    if(name == undefined || name.trim().length == 0 || this.siteExist) {
      this._renderer.addClass(this.siteName.nativeElement, Alerts.Danger);

      Swal.fire({
        title: 'Datos incompletos',
        text: 'Debe capturar el nombre del sitio',
        icon: 'warning'
      });
    }
    else {
      if(this.siteSelected.siteId > 0) {
        this.update(this.siteSelected);
      }
      else {
        this.saveSite(name);
      }
    }
  }

  remove($event) {
    let site: Site = $event["Site"];

    Swal.fire({
      title: 'Activar',
      text: `¿Seguro que desea eliminar el sitio ${site.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((response) => {
      
      if(response.value) {
        this._sitesServices.remove(site).subscribe(
          data => {
            this.getAllSites();
            Swal.fire({
              title: 'Sitio eliminado',
              icon: 'success'
            });
          },
          error => {
            console.log(error);
          }
        );
      }
    });
  }
}
