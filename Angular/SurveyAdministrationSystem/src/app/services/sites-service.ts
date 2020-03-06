import { Injectable } from '@angular/core';
import { Site } from '../models/site';

@Injectable({
  providedIn: 'root'
})
export class SitesServices {

  constructor() { }

  update(site: Site) {
    
  }

  getAll() : Array<Site> {

    let sites: Array<Site> = new Array<Site>();

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

    sites.push(site1);
    sites.push(site2);
    sites.push(site3);
    sites.push(site4);
    sites.push(site5);
    sites.push(site6);
    sites.push(site7);
    sites.push(site8);
    sites.push(site9);
    sites.push(site10);
    sites.push(site11);
    sites.push(site12);
    sites.push(site13);
    sites.push(site14);
    sites.push(site15);
    sites.push(site16);
    sites.push(site17);
    sites.push(site18);
    sites.push(site19);
    sites.push(site20);
    sites.push(site21);
    sites.push(site22);
    sites.push(site23);
    sites.push(site24);
    sites.push(site25);
    sites.push(site26);
    sites.push(site27);
    sites.push(site28);
    sites.push(site29);
    sites.push(site30);
    sites.push(site31);
    sites.push(site32);
    sites.push(site33);
    sites.push(site34);
    sites.push(site35);
    sites.push(site36);

    return sites.sort((a, b) => {
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
