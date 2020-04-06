import { Department } from '../department';

export class DepartmentEmitter {
    private department: Department;
    private row: HTMLElement;

    constructor(_department: Department, _row: HTMLElement) {
        this.department = _department;
        this.row = _row;
    }

    get Department() {
        return this.department;
    }

    get Row() {
        return this.row;
    }
}