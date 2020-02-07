import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SurveysComponent } from './pages/surveys/surveys/surveys.component';
import { AppRoutingModule } from './app-routing.module';
import { SurveySummaryComponent } from './pages/surveys/surveys/surveysummary/survey-summary.component';
import { NewEditSurveyComponent } from './pages/surveys/newsurvey/neweditsurvey/new-edit-survey.component';
import { MenuSummarySurveyComponent } from './pages/surveys/menusummarysurvey/menu-summary-survey.component';
import { ControlButtonsComponent } from './pages/surveys/newsurvey/controlbuttons/control-buttons.component';
import { OptionsPerQuestionComponent } from './pages/surveys/newsurvey/optionsperquestion/options-per-question.component';
import { QuestionComponent } from './pages/surveys/newsurvey/question/question.component';
import { PredefinedResponseCatalogComponent } from './pages/surveys/newsurvey/predefinedresponsecatalog/predefined-response-catalog.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ResponsecatalogmodalComponent } from './pages/surveys/newsurvey/predefinedresponsecatalog/responsecatalogmodal/response-catalog-modal.component';
import { MatRadioModule } from '@angular/material/radio';
import { SingleSelectionAnswerComponent } from './pages/surveys/newsurvey/question/singleselectionanswer/single-selection-answer.component';
import { FreetextanswerComponent } from './pages/surveys/newsurvey/question/freetextanswer/free-text-answer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SitesCatalogModalComponent } from './pages/surveys/newsurvey/question/sitescatalogmodal/sitescatalogmodal.component';
import { MultipleChoisesComponent } from './pages/surveys/newsurvey/question/multiplechoises/multiple-choises.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  entryComponents: [
    SitesCatalogModalComponent
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
    SitesCatalogModalComponent,
    MultipleChoisesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatRadioModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
