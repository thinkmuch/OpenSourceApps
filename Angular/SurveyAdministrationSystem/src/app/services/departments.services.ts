import { Injectable } from '@angular/core';
import { Department } from '../models/department';

@Injectable({
    providedIn: 'root'
})
export class DepartmentsServices {

    constructor() {
        
    }

    getAll(): Array<Department> {
        let departments = new Array<Department>();

        let department1 = new Department();
        department1.id = 1;
        department1.name = "Ama de llaves";
        department1.status = 1;
        
        let department2 = new Department();
        department2.id = 2;
        department2.name = "Areas publicas";
        department2.status = 1;

        let department3 = new Department();
        department3.id = 3;
        department3.name = "Stewards";
        department3.status = 1;

        let department4 = new Department();
        department4.id = 4;
        department4.name = "Recepcion";
        department4.status = 1;

        let department5 = new Department();
        department5.id = 5;
        department5.name = "Reservaciones";
        department5.status = 1;

        let department6 = new Department();
        department6.id = 6;
        department6.name = "Mantenimiento";
        department6.status = 1;

        let department7 = new Department();
        department7.id = 7;
        department7.name = "Alimentos y bebidas";
        department7.status = 1;

        let department8 = new Department();
        department8.id = 8;
        department8.name = "Boutique";
        department8.status = 1;

        let department9 = new Department();
        department9.id = 9;
        department9.name = "Albercas";
        department9.status = 1;

        let department10 = new Department();
        department10.id = 1;
        department10.name = "Cybercafe";
        department10.status = 1;

        let department11 = new Department();
        department11.id = 11;
        department11.name = "Animación";
        department11.status = 1;

        let department12 = new Department();
        department12.id = 12;
        department12.name = "Seguridad";
        department12.status = 1;

        let department13 = new Department();
        department13.id = 13;
        department13.name = "Campo de golf";
        department13.status = 1;

        let department14 = new Department();
        department14.id = 14;
        department14.name = "Aqua park";
        department14.status = 1;

        let department15 = new Department();
        department15.id = 15;
        department15.name = "Tren, botes, kayaks";
        department15.status = 1;

        let department16 = new Department();
        department16.id = 16;
        department16.name = "Sea market";
        department16.status = 1;

        let department17 = new Department();
        department17.id = 17;
        department17.name = "Videojuegos";
        department17.status = 1;

        let department18 = new Department();
        department18.id = 1;
        department18.name = "Canchas de tenis";
        department18.status = 1;

        let department19 = new Department();
        department19.id = 19;
        department19.name = "Lavanderia";
        department19.status = 1;

        let department20 = new Department();
        department20.id = 20;
        department20.name = "Gerencia";
        department20.status = 1;

        let department21 = new Department();
        department21.id = 21;
        department21.name = "Spa/gimnasio";
        department21.status = 1;

        let department22 = new Department();
        department22.id = 22;
        department22.name = "General";
        department22.status = 1;

        let department23 = new Department();
        department23.id = 23;
        department23.name = "Ventas";
        department23.status = 1;

        let department24 = new Department();
        department24.id = 24;
        department24.name = "Entretenimiento";
        department24.status = 1;

        departments.push(department1);
        departments.push(department2);
        departments.push(department3);
        departments.push(department4);
        departments.push(department5);
        departments.push(department6);
        departments.push(department7);
        departments.push(department8);
        departments.push(department9);
        departments.push(department10);
        departments.push(department11);
        departments.push(department12);
        departments.push(department13);
        departments.push(department14);
        departments.push(department15);
        departments.push(department16);
        departments.push(department17);
        departments.push(department18);
        departments.push(department19);
        departments.push(department20);
        departments.push(department21);
        departments.push(department22);
        departments.push(department23);
        departments.push(department24);

        return departments;
    }
}