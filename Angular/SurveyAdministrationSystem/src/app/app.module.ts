import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SurveysComponent } from './pages/surveys/surveys/surveys.component';
import { AppRoutingModule } from './app-routing.module';
import { SurveySummaryComponent } from './pages/surveys/surveys/surveysummary/surveysummary.component';
import { NewEditSurveyComponent } from './pages/surveys/newsurvey/neweditsurvey/neweditsurvey.component';
import { MenuSummarySurveyComponent } from './pages/surveys/menusummarysurvey/menusummarysurvey.component';
import { ControlButtonsComponent } from './pages/surveys/newsurvey/controlbuttons/controlbuttons.component';
import { OptionsPerQuestionComponent } from './pages/surveys/newsurvey/optionsperquestion/optionsperquestion.component';
import { QuestionComponent } from './pages/surveys/newsurvey/question/question.component';
import { PredefinedResponseCatalogComponent } from './pages/surveys/newsurvey/predefinedresponsecatalog/predefinedresponsecatalog.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ResponsecatalogmodalComponent } from './pages/surveys/newsurvey/predefinedresponsecatalog/responsecatalogmodal/responsecatalogmodal.component';
import { MatRadioModule } from '@angular/material/radio';
import { SingleSelectionAnswerComponent } from './pages/surveys/newsurvey/question/singleselectionanswer/singleselectionanswer.component';
import { FreetextanswerComponent } from './pages/surveys/newsurvey/question/freetextanswer/freetextanswer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SitescatalogmodalComponent } from './pages/surveys/newsurvey/question/sitescatalogmodal/sitescatalogmodal.component';

@NgModule({
  entryComponents: [
    SitescatalogmodalComponent
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SurveysComponent,
    SurveySummaryComponent,
    NewEditSurveyComponent,
    MenuSummarySurveyComponent,
    ControlButtonsComponent,
    OptionsPerQuestionComponent,
    QuestionComponent,
    PredefinedResponseCatalogComponent,
    ResponsecatalogmodalComponent,
    SingleSelectionAnswerComponent,
    FreetextanswerComponent,
    SitescatalogmodalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatRadioModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
