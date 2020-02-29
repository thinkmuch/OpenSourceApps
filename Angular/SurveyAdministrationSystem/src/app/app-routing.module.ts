import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SurveysComponent } from './pages/surveys/surveys/surveys.component';
import { NewEditSurveyComponent } from './pages/surveys/newsurvey/new-edit-survey/new-edit-survey.component';
import { AddLanguageComponent } from './pages/surveys/add-language/add-language.component';
import { CatalogsComponent } from './pages/catalogs/catalogs.component';
import { SquaresComponent } from './pages/catalogs/squares/squares.component';
import { HotelsComponent } from './pages/catalogs/hotels/hotels.component';
import { SitesComponent } from './pages/catalogs/sites/sites.component';
import { DepartmentsComponent } from './pages/catalogs/departments/departments.component';
import { AreasComponent } from './pages/catalogs/areas/areas.component';
import { LanguagesComponent } from './pages/catalogs/languages/languages.component';

const routes: Routes = [
  { 
    path: 'dashboard', 
    component: DashboardComponent 
  },
  {
    path: '',
    redirectTo: 'encuestas',
    pathMatch: 'full'
  },
  { 
    path: 'encuestas', 
    component: SurveysComponent
  },
  {
    path: 'encuesta/nueva',
    component: NewEditSurveyComponent
  },
  {
    path: 'encuesta/:id',
    component: NewEditSurveyComponent
  },
  {
    path: 'encuestas/:id/idioma',
    component: AddLanguageComponent
  },
  {
    path: 'catalogos',
    component: CatalogsComponent,
    children: 
    [
      {
        path: 'plazas',
        component: SquaresComponent
      },
      {
        path: 'hoteles',
        component: HotelsComponent
      },
      {
        path: 'sitios',
        component: SitesComponent
      },
      {
        path: 'departamentos',
        component: DepartmentsComponent
      },
      {
        path: 'areas',
        component: AreasComponent
      },
      {
        path: 'idiomas',
        component: LanguagesComponent
      }
    ]
  },
  { 
    path: '**', 
    pathMatch: 'full', 
    redirectTo: 'dashboard' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
