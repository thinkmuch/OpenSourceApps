import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SurveysComponent } from './pages/surveys/surveys/surveys.component';
import { NewEditSurveyComponent } from './pages/surveys/newsurvey/neweditsurvey/new-edit-survey.component';

const routes: Routes = [
  { 
    path: 'dashboard', 
    component: DashboardComponent 
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
