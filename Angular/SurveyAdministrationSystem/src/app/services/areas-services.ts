import { Injectable } from '@angular/core';
import { Area } from '../models/area';
import { Status } from '../enums/class-enum';

@Injectable({
    providedIn: 'root'
})
export class AreasServices {

    areas = new Array<Area>();

    constructor() {
        let area1 = new Area();
        area1.id = 1;
        area1.name = "Spa, Salón y Fitness - Fitness Grand Luxxe";
        area1.status = 1;

        let area2 = new Area();
        area2.id = 2;
        area2.name = "Experiencia Vacacional - General";
        area2.status = 1;

        let area3 = new Area();
        area3.id = 3;
        area3.name = "Concierge y Camarista";
        area3.status = 1;

        let area4 = new Area();
        area4.id = 4;
        area4.name = "Golf y Tenis - Campo de golf";
        area4.status = 1;

        let area5 = new Area();
        area5.id = 5;
        area5.name = "Driving range";
        area5.status = 1;

        let area6 = new Area();
        area6.id = 6;
        area6.name = "Profesional de golf";
        area6.status = 1;

        let area7 = new Area();
        area7.id = 7;
        area7.name = "Bebidas";
        area7.status = 1;

        let area8 = new Area();
        area8.id = 8;
        area8.name = "Check-out";
        area8.status = 1;

        let area9 = new Area();
        area9.id = 9;
        area9.name = "Retail - Sun Market";
        area9.status = 1;

        let area10 = new Area();
        area10.id = 10;
        area10.name = "Spa, Salón & Fitness - Brio Spa";
        area10.status = 1;

        let area11 = new Area();
        area11.id = 11;
        area11.name = "Registro (Atención)";
        area11.status = 1;

        let area12 = new Area();
        area12.id = 12;
        area12.name = "Habitación y Lobby";
        area12.status = 1;

        let area13 = new Area();
        area13.id = 13;
        area13.name = "Entrenadores";
        area13.status = 1;

        let area14 = new Area();
        area14.id = 14;
        area14.name = "Registro (Rapidez)";
        area14.status = 1;

        let area15 = new Area();
        area15.id = 15;
        area15.name = "Golf y Tenis - Tenis";
        area15.status = 1;

        let area16 = new Area();
        area16.id = 16;
        area16.name = "Reservaciones";
        area16.status = 1;

        let area17 = new Area();
        area17.id = 17;
        area17.name = "Mesero";
        area17.status = 1;

        let area18 = new Area();
        area18.id = 18;
        area18.name = "Instalaciones";
        area18.status = 1;

        let area19 = new Area();
        area19.id = 19;
        area19.name = "Spa, Salón y Fitness - Fitness Mayan Palace";
        area19.status = 1;

        let area20 = new Area();
        area20.id = 20;
        area20.name = "Desarrollo y Albercas";
        area20.status = 1;

        let area21 = new Area();
        area21.id = 21;
        area21.name = "Retail - Mercado Gourmet";
        area21.status = 1;

        let area22 = new Area();
        area22.id = 22;
        area22.name = "Mantenimiento del campo";
        area22.status = 1;

        let area23 = new Area();
        area23.id = 23;
        area23.name = "Car bar";
        area23.status = 1;

        let area24 = new Area();
        area24.id = 24;
        area24.name = "Golf y Tenis - Golf The Lakes";
        area24.status = 1;

        let area25 = new Area();
        area25.id = 25;
        area25.name = "Habitaciones";
        area25.status = 1;

        let area26 = new Area();
        area26.id = 26;
        area26.name = "Calidad Y confort de la habitación";
        area26.status = 1;

        let area27 = new Area();
        area27.id = 27;
        area27.name = "Spa, Salón & Fitness - Servicios de Masaje";
        area27.status = 1;

        let area28 = new Area();
        area28.id = 28;
        area28.name = "Carros de golf";
        area28.status = 1;

        let area29 = new Area();
        area29.id = 29;
        area29.name = "Habitación";
        area29.status = 1;

        let area30 = new Area();
        area30.id = 30;
        area30.name = "Alimentos y Bebidas";
        area30.status = 1;

        let area31 = new Area();
        area31.id = 32;
        area31.name = "Canchas de tenis";
        area31.status = 1;

        let area32 = new Area();
        area32.id = 32;
        area32.name = "Campos de golf y canhas de tenis";
        area32.status = 1;

        let area33 = new Area();
        area33.id = 33;
        area33.name = "Restaurante";
        area33.status = 1;

        let area34 = new Area();
        area34.id = 34;
        area34.name = "Retail - Jade";
        area34.status = 1;

        let area35 = new Area();
        area35.id = 35;
        area35.name = "Transporte y Seguridad";
        area35.status = 1;

        let area36 = new Area();
        area36.id = 36;
        area36.name = "Joy Squad y experiencias de entretenimiento";
        area36.status = 1;

        let area37 = new Area();
        area37.id = 37;
        area37.name = "Spa, Salón & Fitness - Salón de belleza";
        area37.status = 1;

        let area38 = new Area();
        area38.id = 38;
        area38.name = "Trámites y servicios";
        area38.status = 1;

        let area39 = new Area();
        area39.id = 39;
        area39.name = "Relacionamiento Vidanta";
        area39.status = 1;

        let area40 = new Area();
        area40.id = 40;
        area40.name = "Toma y entrega de orden";
        area40.status = 1;

        let area41 = new Area();
        area41.id = 41;
        area41.name = "Atención del personal";
        area41.status = 1;

        let area42 = new Area();
        area42.id = 42;
        area42.name = "Golf y Tenis - Golf Norman";
        area42.status = 1;

        let area43 = new Area();
        area43.id = 43;
        area43.name = "Entretenimiento";
        area43.status = 1;

        let area44 = new Area();
        area44.id = 44;
        area44.name = "Gimnasio";
        area44.status = 1;

        let area45 = new Area();
        area45.id = 45;
        area45.name = "Campo de Golf";
        area45.status = 1;

        let area46 = new Area();
        area46.id = 46;
        area46.name = "Señalamientos";
        area46.status = 1;

        let area47 = new Area();
        area47.id = 47;
        area47.name = "Retail - Tiendas y Boutiques";
        area47.status = 1;

        let area48 = new Area();
        area48.id = 48;
        area48.name = "Check-In";
        area48.status = 1;

        let area49 = new Area();
        area49.id = 49;
        area49.name = "Spa, Salón & Fitness - Spatium Say Apa";
        area49.status = 1;

        let area50 = new Area();
        area50.id = 50;
        area50.name = "Transportación";
        area50.status = 1;

        let area51 = new Area();
        area51.id = 51;
        area51.name = "Golf y Tenis - Golf Nicklaus";
        area51.status = 1;

        let area52 = new Area();
        area52.id = 52;
        area52.name = "Golf y Tenis - Golf";
        area52.status = 1;

        let area53 = new Area();
        area53.id = 53;
        area53.name = "Calificación general";
        area53.status = 1;

        let area54 = new Area();
        area54.id = 54;
        area54.name = "Servicios complementarios";
        area54.status = 1;

        let area55 = new Area();
        area55.id = 55;
        area55.name = "Servicios del hotel";
        area55.status = 1;

        let area56 = new Area();
        area56.id = 56;
        area56.name = "Pro Shop";
        area56.status = 1;

        let area57 = new Area();
        area57.id = 57;
        area57.name = "Calificación del campo";
        area57.status = 1;

        let area58 = new Area();
        area58.id = 58;
        area58.name = "Spa, Salón y Fitness - Fitness Grand Mayan";
        area58.status = 1;

        this.areas.push(area1);
        this.areas.push(area2);
        this.areas.push(area3);
        this.areas.push(area4);
        this.areas.push(area5);
        this.areas.push(area6);
        this.areas.push(area7);
        this.areas.push(area8);
        this.areas.push(area9);
        this.areas.push(area10);
        this.areas.push(area11);
        this.areas.push(area12);
        this.areas.push(area13);
        this.areas.push(area14);
        this.areas.push(area15);
        this.areas.push(area16);
        this.areas.push(area17);
        this.areas.push(area18);
        this.areas.push(area19);
        this.areas.push(area20);
        this.areas.push(area31);
        this.areas.push(area32);
        this.areas.push(area33);
        this.areas.push(area34);
        this.areas.push(area35);
        this.areas.push(area36);
        this.areas.push(area37);
        this.areas.push(area38);
        this.areas.push(area39);
        this.areas.push(area40);
        this.areas.push(area41);
        this.areas.push(area42);
        this.areas.push(area43);
        this.areas.push(area44);
        this.areas.push(area45);
        this.areas.push(area46);
        this.areas.push(area47);
        this.areas.push(area48);
        this.areas.push(area49);
        this.areas.push(area50);
        this.areas.push(area51);
        this.areas.push(area52);
        this.areas.push(area53);
        this.areas.push(area54);
        this.areas.push(area55);
        this.areas.push(area56);
        this.areas.push(area57);
        this.areas.push(area58);
    }

    update(area: Area) {
        for(let i = 0; i < this.areas.length; i++) {
            if(this.areas[i].id == area.id) {
                this.areas[i].name = area.name;
                break;
            }
        }
    }

    exist(name: string): boolean {
        for(let i = 0; i < this.areas.length; i++) {
            if(this.areas[i].name.trim() == name.trim()) {
                return true;
            }
        }

        return false;
    }

    save(name: string) {
        let area = new Area();
        area.id = this.areas.length + 1;
        area.name = name;
        area.status = Status.Inactive;

        this.areas.push(area);
    }

    getAreasByDepartmentId(departmentId: number) {
        let areasBtDepartment = new Array<Area>();

        let area1 = new Area();
        area1.id = 1;
        area1.name = "Spa, Salón y Fitness - Fitness Grand Luxxe";
        area1.status = 1;

        let area4 = new Area();
        area4.id = 4;
        area4.name = "Golf y Tenis - Campo de golf";
        area4.status = 1;

        let area9 = new Area();
        area9.id = 9;
        area9.name = "Retail - Sun Market";
        area9.status = 1;

        let area10 = new Area();
        area10.id = 10;
        area10.name = "Spa, Salón & Fitness - Brio Spa";
        area10.status = 1;

        let area11 = new Area();
        area11.id = 11;
        area11.name = "Registro (Atención)";
        area11.status = 1;

        areasBtDepartment.push(area1);
        areasBtDepartment.push(area4);
        areasBtDepartment.push(area9);
        areasBtDepartment.push(area10);
        areasBtDepartment.push(area11);

        return areasBtDepartment;
    }

    getAll(): Array<Area> {
        return this.areas.sort((a, b) => {
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