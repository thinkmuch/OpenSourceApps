import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SurveysComponent } from './pages/surveys/surveys/surveys.component';
import { AppRoutingModule } from './app-routing.module';
import { SurveySummaryComponent } from './pages/surveys/surveys/survey-summary/survey-summary.component';
import { NewEditSurveyComponent } from './pages/surveys/newsurvey/new-edit-survey/new-edit-survey.component';
import { MenuSummarySurveyComponent } from './pages/surveys/surveys/menu-summary-survey/menu-summary-survey.component';
import { ControlButtonsComponent } from './pages/surveys/newsurvey/new-edit-survey/control-buttons/control-buttons.component';
import { QuestionComponent } from './pages/surveys/newsurvey/new-edit-survey/question/question.component';  
import { AnswerTypesCatalogComponent } from './pages/surveys/newsurvey/new-edit-survey/answers/answer-types-catalog/answer-types-catalog.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { SingleSelectionAnswerPreviewComponent } from './pages/surveys/newsurvey/new-edit-survey/question/single-selection-answer-preview/single-selection-answer-preview.component';
import { FreeTextAnswerPreviewComponent } from './pages/surveys/newsurvey/new-edit-survey/question/free-text-answer-preview/free-text-answer-preview.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SitesCatalogModalComponent } from "./pages/surveys/newsurvey/new-edit-survey/question/sites-catalog-modal/sites-catalog-modal.component";
import { MultipleChoisesPreviewComponent } from './pages/surveys/newsurvey/new-edit-survey/question/multiple-choises-preview/multiple-choises-preview.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './pages/surveys/newsurvey/new-edit-survey/footer/footer.component';
import { DropdownPredefinedAnswerComponent } from './pages/surveys/newsurvey/new-edit-survey/answers/dropdown-single-selection-answer/dropdown-predefined-answer.component';
import { QuestionMenuComponent } from './pages/surveys/newsurvey/new-edit-survey/question/question-menu/question-menu.component';
import { SquareHotelCatalogModalComponent } from './pages/surveys/newsurvey/new-edit-survey/footer/square-hotel-catalog-modal/square-hotel-catalog-modal.component';
import { AddLanguageComponent } from './pages/surveys/add-language/add-language.component';
import { CatalogsComponent } from './pages/catalogs/catalogs.component';
import { ChartsModule } from 'ng2-charts';
import { SurveysNameListComponent } from './pages/dashboard/surveys-name-list/surveys-name-list.component';
import { QuestionListComponent } from './pages/dashboard/question-list/question-list.component';
import { SearchButtonsComponent } from './pages/dashboard/search-buttons/search-buttons.component';

@NgModule({
  entryComponents: [
    SitesCatalogModalComponent,
    SquareHotelCatalogModalComponent
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
    QuestionComponent,
    AnswerTypesCatalogComponent,
    SingleSelectionAnswerPreviewComponent,
    FreeTextAnswerPreviewComponent,
    SitesCatalogModalComponent,
    MultipleChoisesPreviewComponent,
    FooterComponent,
    DropdownPredefinedAnswerComponent,
    QuestionMenuComponent,
    SquareHotelCatalogModalComponent,
    AddLanguageComponent,
    CatalogsComponent,
    SurveysNameListComponent,
    QuestionListComponent,
    SearchButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
