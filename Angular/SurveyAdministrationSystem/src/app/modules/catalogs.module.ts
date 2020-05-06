import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesComponent } from '../pages/catalogs/languages/languages.component';
import { LanguagesTableComponent } from '../pages/catalogs/languages/languages-table/languages-table.component';
import { AreasComponent } from '../pages/catalogs/areas/areas.component';
import { AreasTableComponent } from '../pages/catalogs/areas/areas-table/areas-table.component';
import { DepartmentsComponent } from '../pages/catalogs/departments/departments.component';
import { DepartmentDetailComponent } from '../pages/catalogs/departments/department-detail/department-detail.component';
import { DepartmentsTableComponent } from '../pages/catalogs/departments/departments-table/departments-table.component';
import { SitesComponent } from '../pages/catalogs/sites/sites.component';
import { SitesTableComponent } from '../pages/catalogs/sites/sites-table/sites-table.component';
import { CruisesComponent } from '../pages/catalogs/cruises/cruises.component';
import { CruiseDetailComponent } from '../pages/catalogs/cruises/cruise-detail/cruise-detail.component';
import { CruisesTableComponent } from '../pages/catalogs/cruises/cruises-table/cruises-table.component';
import { HotelsComponent } from '../pages/catalogs/hotels/hotels.component';
import { HotelsTableComponent } from '../pages/catalogs/hotels/hotels-table/hotels-table.component';
import { HotelDetailComponent } from '../pages/catalogs/hotels/hotel-detail/hotel-detail.component';
import { SquaresComponent } from '../pages/catalogs/squares/squares.component';
import { SquaresTableComponent } from '../pages/catalogs/squares/squares-table/squares-table.component';
import { SquareDetailComponent } from '../pages/catalogs/squares/square-detail/square-detail.component';
import { AnswersComponent } from '../pages/catalogs/answers/answers.component';
import { AnswersTableComponent } from '../pages/catalogs/answers/answers-table/answers-table.component';
import { SharedModule } from '../modules/shared.module';
import { MaterialModule } from '../modules/material.module';
import { AnswerDetailComponent } from '../pages/catalogs/answers/answer-detail/answer-detail.component';

@NgModule({
  declarations: [
    LanguagesComponent,
    LanguagesTableComponent,
    AreasComponent,
    AreasTableComponent,
    DepartmentsComponent,
    DepartmentDetailComponent,
    DepartmentsTableComponent,
    SitesComponent,
    SitesTableComponent,
    CruisesComponent,
    CruiseDetailComponent,
    CruisesTableComponent,
    HotelsComponent,
    HotelsTableComponent,
    HotelDetailComponent,
    SquaresComponent,
    SquaresTableComponent,
    SquareDetailComponent,
    AnswersComponent,
    AnswersTableComponent,
    AnswerDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    LanguagesComponent,
    LanguagesTableComponent,
    AreasComponent,
    AreasTableComponent,
    DepartmentsComponent,
    DepartmentDetailComponent,
    DepartmentsTableComponent,
    SitesComponent,
    SitesTableComponent,
    CruisesComponent,
    CruiseDetailComponent,
    CruisesTableComponent,
    HotelsComponent,
    HotelsTableComponent,
    HotelDetailComponent,
    SquaresComponent,
    SquaresTableComponent,
    SquareDetailComponent,
    AnswersComponent,
    AnswersTableComponent
  ]
})
export class CatalogsModule { }
