import { Injectable } from '@angular/core';
import { Site } from '../models/site';
import { Status } from '../enums/class-enum';

@Injectable({
  providedIn: 'root'
})
export class SitesServices {

  private sites: Array<Site> = new Array<Site>();

  constructor() { 
    let site1 = new Site();
    site1.id = 1;
    site1.name = "Azur";
    site1.status = 1;

    let site2 = new Site();
    site2.id = 2;
    site2.name = "Costa Arena";
    site2.status = 1;

    let site3 = new Site();
    site3.id = 3;
    site3.name = "Epazote";
    site3.status = 1;

    let site4 = new Site();
    site4.id = 4;
    site4.name = "Gong";
    site4.status = 1;

    let site5 = new Site();
    site5.id = 5;
    site5.name = "Quinto Charcoal Grill";
    site5.status = 1;

    let site6 = new Site();
    site6.id = 6;
    site6.name = "The Burger Custom Made";
    site6.status = 1;

    let site7 = new Site();
    site7.id = 7;
    site7.name = "Tramonto";
    site7.status = 1;

    let site8 = new Site();
    site8.id = 8;
    site8.name = "Ameca Social House";
    site8.status = 1;

    let site9 = new Site();
    site9.id = 9;
    site9.name = "Balance";
    site9.status = 1;

    let site10 = new Site();
    site10.id = 10;
    site10.name = "Balché";
    site10.status = 1;

    let site11 = new Site();
    site11.id = 11;
    site11.name = "Limón y Sal";
    site11.status = 1;

    let site12 = new Site();
    site12.id = 12;
    site12.name = "Café del Lago";
    site12.status = 1;
    
    let site13 = new Site();
    site13.id = 13;
    site13.name = "Chiringuito";
    site13.status = 1;

    let site14 = new Site();
    site14.id = 14;
    site14.name = "Fresh Co";
    site14.status = 1;

    let site15 = new Site();
    site15.id = 15;
    site15.name = "Havana Moon";
    site15.status = 1;

    let site16 = new Site();
    site16.id = 16;
    site16.name = "Il Forno di gio";
    site16.status = 1;

    let site17 = new Site()
    site17.id = 17;
    site17.name = "La Cantina";
    site17.status = 1;

    let site18 = new Site();
    site18.id = 18;
    site18.name = "Mercado México";
    site18.status = 1;

    let site19 = new Site();
    site19.id = 19;
    site19.name = "Ola Mulata";
    site19.status = 1;

    let site20 = new Site();
    site20.id = 20;
    site20.name = "Samba";
    site20.status = 1;

    let site21 = new Site();
    site21.id = 21;
    site21.name = "Si Snack";
    site21.status = 1;

    let site22 = new Site();
    site22.id = 22;
    site22.name = "Sweet Paris";
    site22.status = 1;

    let site23 = new Site();
    site23.id = 23;
    site23.name = "Sky Garden";
    site23.status = 1;

    let site24 = new Site();
    site24.id = 24;
    site24.name = "Tacos Break";
    site24.status = 1;

    let site25 = new Site();
    site25.id = 25;
    site25.name = "Pools Bar";
    site25.status = 1;

    let site26 = new Site();
    site26.id = 26;
    site26.name = "Grand Vista Bar";
    site26.status = 1;
    
    let site27 = new Site();
    site27.id = 27;
    site27.name = "Library Bar";
    site27.status = 1;

    let site28 = new Site();
    site28.id = 28;
    site28.name = "Luxxe Bar";
    site28.status = 1;

    let site29 = new Site();
    site29.id = 29;
    site29.name = "The Grand Lobby Bar";
    site29.status = 1;

    let site30 = new Site();
    site30.id = 30;
    site30.name = "Santuario";
    site30.status = 1;

    let site31 = new Site();
    site31.id = 31;
    site31.name = "La Isla de Cocos";
    site31.status = 1;

    let site32 = new Site();
    site32.id = 32;
    site32.name = "Brio Spa";
    site32.status = 1;

    let site33 = new Site();
    site33.id = 33;
    site33.name = "Spatium";
    site33.status = 1;

    let site34 = new Site();
    site34.id = 34;
    site34.name = "Jungala";
    site34.status = 1;

    let site35 = new Site();
    site35.id = 35;
    site35.name = "Cirque Du Soleil JOYÀ";
    site35.status = 1;

    let site36 = new Site();
    site36.id = 36;
    site36.name = "Jade Boutique";
    site36.status = 1;

    this.sites.push(site1);
    this.sites.push(site2);
    this.sites.push(site3);
    this.sites.push(site4);
    this.sites.push(site5);
    this.sites.push(site6);
    this.sites.push(site7);
    this.sites.push(site8);
    this.sites.push(site9);
    this.sites.push(site10);
    this.sites.push(site11);
    this.sites.push(site12);
    this.sites.push(site13);
    this.sites.push(site14);
    this.sites.push(site15);
    this.sites.push(site16);
    this.sites.push(site17);
    this.sites.push(site18);
    this.sites.push(site19);
    this.sites.push(site20);
    this.sites.push(site21);
    this.sites.push(site22);
    this.sites.push(site23);
    this.sites.push(site24);
    this.sites.push(site25);
    this.sites.push(site26);
    this.sites.push(site27);
    this.sites.push(site28);
    this.sites.push(site29);
    this.sites.push(site30);
    this.sites.push(site31);
    this.sites.push(site32);
    this.sites.push(site33);
    this.sites.push(site34);
    this.sites.push(site35);
    this.sites.push(site36);
  }

  update(site: Site) {
    for(let i = 0; i < this.sites.length; i++) {
      if(this.sites[i].id == site.id) {
        this.sites[i].name = site.name;
        break;
      }
    }
  }

  exist(name: string) {
    for(let i = 0; i < this.sites.length; i++) {
      if(this.sites[i].name == name) {
        return true;
      }
    }
    return false;
  }

  save(name: string) {
    let site = new Site();
    site.id = this.sites.length + 1;
    site.name = name;
    site.status = Status.Inactive;

    this.sites.push(site);
  }

  getAll() : Array<Site> {
    return this.sites.sort((a, b) => {
      if (a.id > b.id) {
          return 1;
      }
      if (b.id > a.id) {
          return -1;
      }
      return 0;
  });
  }
}
