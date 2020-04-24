import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { SingleSelectionAnswerPreviewComponent } from './pages/surveys/newsurvey/new-edit-survey/question/single-selection-answer-preview/single-selection-answer-preview.component';
import { FreeTextAnswerPreviewComponent } from './pages/surveys/newsurvey/new-edit-survey/question/free-text-answer-preview/free-text-answer-preview.component';
import { SitesCatalogModalComponent } from "./pages/surveys/newsurvey/new-edit-survey/question/sites-catalog-modal/sites-catalog-modal.component";
import { MultipleChoisesPreviewComponent } from './pages/surveys/newsurvey/new-edit-survey/question/multiple-choises-preview/multiple-choises-preview.component';
import { FooterComponent } from './pages/surveys/newsurvey/new-edit-survey/footer/footer.component';
import { DropdownPredefinedAnswerComponent } from './pages/surveys/newsurvey/new-edit-survey/answers/dropdown-single-selection-answer/dropdown-predefined-answer.component';
import { QuestionMenuComponent } from './pages/surveys/newsurvey/new-edit-survey/question/question-menu/question-menu.component';
import { AddLanguageComponent } from './pages/surveys/add-language/add-language.component';
import { CatalogsComponent } from './pages/catalogs/catalogs.component';
import { ChartsModule } from 'ng2-charts';
import { SurveysNameListComponent } from './pages/dashboard/surveys-name-list/surveys-name-list.component';
import { QuestionListComponent } from './pages/dashboard/question-list/question-list.component';
import { SearchButtonsComponent } from './pages/dashboard/search-buttons/search-buttons.component';
import { SatisfactionBarComponent } from './pages/dashboard/satisfaction-bar/satisfaction-bar.component';
import { PercentageBarComponent } from './pages/dashboard/percentage-bar/percentage-bar.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { ConfigOptionsComponent } from './pages/surveys/newsurvey/new-edit-survey/answers/config-options/config-options.component';
import { SquareHotelCatalogComponent } from './pages/surveys/newsurvey/new-edit-survey/footer/square-hotel-catalog/square-hotel-catalog.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material.module';
import { SharedModule } from './modules/shared.module';
import { CatalogsModule } from './modules/catalogs.module';

@NgModule({
  entryComponents: [
    SitesCatalogModalComponent,
    SquareHotelCatalogComponent
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
    AddLanguageComponent,
    CatalogsComponent,
    SurveysNameListComponent,
    QuestionListComponent,
    SearchButtonsComponent,
    SatisfactionBarComponent,
    PercentageBarComponent,
    ReportesComponent,
    ConfigOptionsComponent,
    SquareHotelCatalogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ChartsModule,
    HttpClientModule,
    MaterialModule,
    CatalogsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
