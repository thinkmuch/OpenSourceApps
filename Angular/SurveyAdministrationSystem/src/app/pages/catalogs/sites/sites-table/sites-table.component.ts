import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Site } from 'src/app/models/site';
import Swal from 'sweetalert2';
import { Status } from 'src/app/enums/class-enum';
import { SitesServices } from 'src/app/services/sites-service';

@Component({
  selector: 'app-sites-table',
  templateUrl: './sites-table.component.html',
  styleUrls: ['./sites-table.component.css']
})
export class SitesTableComponent implements OnInit {

  @Input("sitesInput") sites: Array<Site>;
  @Output() editEvent: EventEmitter<{ site: Site, row: HTMLElement }>;
  
  constructor(
    private _sitesServices: SitesServices
  ) {
    this.editEvent = new EventEmitter<{ site: Site, row: HTMLElement }>();
   }

  ngOnInit() {
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

        site.statusId = Status.Active;
        this._sitesServices.update(site).subscribe(
          data => {
            Swal.fire({
              title: 'Sitio activado',
              icon: 'success'
            });
          },
          error => {
            console.log(error);
          }
        )
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

        site.statusId = Status.Inactive;
        this._sitesServices.update(site).subscribe(
          data => {
            Swal.fire({
              title: 'Sitio desactivado',
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

  edit(site: Site, row: HTMLElement) {
    this.editEvent.emit({
      site: site,
      row: row
    });
  }
}
