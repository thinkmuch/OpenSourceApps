import { Injectable } from '@angular/core';
import { Area } from '../models/area';

@Injectable({
    providedIn: 'root'
})
export class AreasServices {
    
    constructor() {}

    getAllAreas(): Array<Area> {
        let areas = new Array<Area>();

        let area1 = new Area();
        area1.id = 1;
        area1.area = "Spa, Salón y Fitness - Fitness Grand Luxxe";

        let area2 = new Area();
        area2.id = 2;
        area2.area = "Experiencia Vacacional - General";

        let area3 = new Area();
        area3.id = 3;
        area3.area = "Concierge y Camarista";

        let area4 = new Area();
        area4.id = 4;
        area4.area = "Golf y Tenis - Campo de golf";

        let area5 = new Area();
        area5.id = 5;
        area5.area = "Driving range";

        let area6 = new Area();
        area6.id = 6;
        area6.area = "Profesional de golf";

        let area7 = new Area();
        area7.id = 7;
        area7.area = "Bebidas";

        let area8 = new Area();
        area8.id = 8;
        area8.area = "Check-out";

        let area9 = new Area();
        area9.id = 9;
        area9.area = "Retail - Sun Market";

        let area10 = new Area();
        area10.id = 10;
        area10.area = "Spa, Salón & Fitness - Brio Spa";

        let area11 = new Area();
        area11.id = 11;
        area11.area = "Registro (Atención)";

        let area12 = new Area();
        area12.id = 12;
        area12.area = "Habitación y Lobby";

        let area13 = new Area();
        area13.id = 13;
        area13.area = "Entrenadores";

        let area14 = new Area();
        area14.id = 14;
        area14.area = "Registro (Rapidez)";

        let area15 = new Area();
        area15.id = 15;
        area15.area = "Golf y Tenis - Tenis";

        let area16 = new Area();
        area16.id = 16;
        area16.area = "Reservaciones";

        let area17 = new Area();
        area17.id = 17;
        area17.area = "Mesero";

        let area18 = new Area();
        area18.id = 18;
        area18.area = "Instalaciones";

        let area19 = new Area();
        area19.id = 19;
        area19.area = "Spa, Salón y Fitness - Fitness Mayan Palace";

        let area20 = new Area();
        area20.id = 20;
        area20.area = "Desarrollo y Albercas";

        let area21 = new Area();
        area21.id = 21;
        area21.area = "Retail - Mercado Gourmet";

        let area22 = new Area();
        area22.id = 22;
        area22.area = "Mantenimiento del campo";

        let area23 = new Area();
        area23.id = 23;
        area23.area = "Car bar";

        let area24 = new Area();
        area24.id = 24;
        area24.area = "Golf y Tenis - Golf The Lakes";

        let area25 = new Area();
        area25.id = 25;
        area25.area = "Habitaciones";

        let area26 = new Area();
        area26.id = 26;
        area26.area = "Calidad Y confort de la habitación";

        let area27 = new Area();
        area27.id = 27;
        area27.area = "Spa, Salón & Fitness - Servicios de Masaje";

        let area28 = new Area();
        area28.id = 28;
        area28.area = "Carros de golf";

        let area29 = new Area();
        area29.id = 29;
        area29.area = "Habitación";

        let area30 = new Area();
        area30.id = 30;
        area30.area = "Alimentos y Bebidas";

        let area31 = new Area();
        area31.id = 32;
        area31.area = "Canchas de tenis";

        let area32 = new Area();
        area32.id = 32;
        area32.area = "Campos de golf y canhas de tenis";

        let area33 = new Area();
        area33.id = 33;
        area33.area = "Restaurante";

        let area34 = new Area();
        area34.id = 34;
        area34.area = "Retail - Jade";

        let area35 = new Area();
        area35.id = 35;
        area35.area = "Transporte y Seguridad";

        let area36 = new Area();
        area36.id = 36;
        area36.area = "Joy Squad y experiencias de entretenimiento";

        let area37 = new Area();
        area37.id = 37;
        area37.area = "Spa, Salón & Fitness - Salón de belleza";

        let area38 = new Area();
        area38.id = 38;
        area38.area = "Trámites y servicios";

        let area39 = new Area();
        area39.id = 39;
        area39.area = "Relacionamiento Vidanta";

        let area40 = new Area();
        area40.id = 40;
        area40.area = "Toma y entrega de orden";

        let area41 = new Area();
        area41.id = 41;
        area41.area = "Atención del personal";

        let area42 = new Area();
        area42.id = 42;
        area42.area = "Golf y Tenis - Golf Norman";

        let area43 = new Area();
        area43.id = 43;
        area43.area = "Entretenimiento";

        let area44 = new Area();
        area44.id = 44;
        area44.area = "Gimnasio";

        let area45 = new Area();
        area45.id = 45;
        area45.area = "Campo de Golf";

        let area46 = new Area();
        area46.id = 46;
        area46.area = "Señalamientos";

        let area47 = new Area();
        area47.id = 47;
        area47.area = "Retail - Tiendas y Boutiques";

        let area48 = new Area();
        area48.id = 48;
        area48.area = "Check-In";

        let area49 = new Area();
        area49.id = 49;
        area49.area = "Spa, Salón & Fitness - Spatium Say Apa";

        let area50 = new Area();
        area50.id = 50;
        area50.area = "Transportación";

        let area51 = new Area();
        area51.id = 51;
        area51.area = "Golf y Tenis - Golf Nicklaus";

        let area52 = new Area();
        area52.id = 52;
        area52.area = "Golf y Tenis - Golf";

        let area53 = new Area();
        area53.id = 53;
        area53.area = "Calificación general";

        let area54 = new Area();
        area54.id = 54;
        area54.area = "Servicios complementarios";

        let area55 = new Area();
        area55.id = 55;
        area55.area = "Servicios del hotel";

        let area56 = new Area();
        area56.id = 56;
        area56.area = "Pro Shop";

        let area57 = new Area();
        area57.id = 57;
        area57.area = "Calificación del campo";

        let area58 = new Area();
        area58.id = 58;
        area58.area = "Spa, Salón y Fitness - Fitness Grand Mayan";

        areas.push(area1);
        areas.push(area2);
        areas.push(area3);
        areas.push(area4);
        areas.push(area5);
        areas.push(area6);
        areas.push(area7);
        areas.push(area8);
        areas.push(area9);
        areas.push(area10);
        areas.push(area11);
        areas.push(area12);
        areas.push(area13);
        areas.push(area14);
        areas.push(area15);
        areas.push(area16);
        areas.push(area17);
        areas.push(area18);
        areas.push(area19);
        areas.push(area20);
        areas.push(area31);
        areas.push(area32);
        areas.push(area33);
        areas.push(area34);
        areas.push(area35);
        areas.push(area36);
        areas.push(area37);
        areas.push(area38);
        areas.push(area39);
        areas.push(area40);
        areas.push(area41);
        areas.push(area42);
        areas.push(area43);
        areas.push(area44);
        areas.push(area45);
        areas.push(area46);
        areas.push(area47);
        areas.push(area48);
        areas.push(area49);
        areas.push(area50);
        areas.push(area51);
        areas.push(area52);
        areas.push(area53);
        areas.push(area54);
        areas.push(area55);
        areas.push(area56);
        areas.push(area57);
        areas.push(area58);

        return areas.sort((a, b) => {
            if (a.area > b.area) {
                return 1;
            }
            if (b.area > a.area) {
                return -1;
            }
            return 0;
        });
    }
}